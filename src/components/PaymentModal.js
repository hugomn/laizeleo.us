import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-responsive-modal";
import styled from "styled-components";
import { space, color, typography } from "styled-system";
import { useIntl } from "react-intl";
import { Grid } from "./Grid";
import { Box } from "./Box";
import Text from "./Text";
import { Flex } from "./Flex";
import { Input } from "./Input";
import { Label } from "./Label";
import Button from "./Button";
import getFormData from "get-form-data";
import Textarea from "./Textarea";

import QRCode from "qrcode";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function buildPixPayload({ pixKey, pixName, pixCity, pixValue, txId }) {
  const keyLength = String(pixKey).length;
  const nameLength = String(pixName).length;
  const cityLength = String(pixCity).length;
  const amountStr = pixValue.toFixed(2);
  const amountLength = amountStr.length;
  const txIdLength = txId.length;
  const subTag26Length = 22 + keyLength;
  const subTag62Length = 4 + txIdLength;

  let payload = `
    000201
    26${String(subTag26Length).padStart(2, "0")}
      0014BR.GOV.BCB.PIX
      01${String(keyLength).padStart(2, "0")}${pixKey}
    52040000
    5303986
    54${String(amountLength).padStart(2, "0")}${amountStr}
    5802BR
    59${String(nameLength).padStart(2, "0")}${pixName}
    60${String(cityLength).padStart(2, "0")}${pixCity}
    62${String(subTag62Length).padStart(2, "0")}
      05${String(txIdLength).padStart(2, "0")}${txId}
    6304
  `
    .replace(/^[ \t]+|[ \t]+$/gm, "") // remove indentation from each line
    .replace(/\n/g, ""); // remove newlines

  // Insert CRC16 at the end
  const withCRC = insertCRC16(payload);
  console.log(withCRC);
  return withCRC;
}

// 2) Insert CRC16, re-adding "6304" before the final 4-hex-digit checksum
function insertCRC16(payload) {
  // Remove the "6304" placeholder at the very end
  // const withoutCRC = payload.replace(/6304$/i, "");
  let crc = 0xffff;

  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc <<= 1;
      }
      crc &= 0xffff;
    }
  }

  const hexCrc = crc.toString(16).toUpperCase().padStart(4, "0");
  // Re-append tag 63, length 04, plus the computed CRC
  console.log(payload + hexCrc);
  return payload + hexCrc;
}

const PaymentModal = (props) => {
  const { contribution, onClose, open } = props;
  console.log({ contribution });
  const { id } = contribution;
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  useEffect(() => {
    async function generateQRCode() {
      try {
        // 1) Define your PIX data:
        const pixKey = "hello@hugo.im"; // Your PIX key
        const pixName = "HugoNogueira"; // Receiver's name
        const pixCity = "JuizDeFora"; // Receiver's city
        const pixValue = contribution.price; // Payment amount (R$100.00)
        const txId = contribution.id; // Some transaction ID (max 25 chars recommended)

        // 2) Build the PIX payload string
        const payload = buildPixPayload({
          pixKey,
          pixName,
          pixCity,
          pixValue,
          txId,
        });

        // 3) Generate a QR Code image (Data URL) from the payload
        const url = await QRCode.toDataURL(payload);
        console.log({ payload, url });
        setQrCodeUrl(url);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    }

    generateQRCode();
  }, []);

  const intl = useIntl();
  const { locale } = intl;
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = getFormData(formRef.current);
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contributions", ...data }),
    });
    setMessageSent(true);
  };

  const renderForm = (hidden) => (
    <Form
      className="email-form"
      name="contributions"
      method="POST"
      // data-netlify="true"
      // action="/"
      onSubmit={handleSubmit}
      ref={formRef}
      style={{ display: hidden ? "none" : "block" }}
      netlify
    >
      <H3 mb={4} px={[2, 4, 6]} pt={4} textAlign="center" color="dark.1">
        {intl.formatMessage({ id: "payment.form.title" })}
      </H3>
      <Flex flexDirection="column" width={["auto", 600, 800]} px={[2, 4, 5]} py={[2, 4]}>
        <Input type="hidden" name="id" value={id} />
        <Label htmlFor="name" fontWeight="500">
          {intl.formatMessage({ id: "payment.form.name.label" })}:
        </Label>
        <Input
          type="text"
          name="name"
          placeholder={intl.formatMessage({
            id: "payment.form.name.placeholder",
          })}
          id="name"
          required
          mb="4"
        />
        <Label htmlFor="email" fontWeight="500">
          {intl.formatMessage({ id: "payment.form.email.label" })}:
        </Label>
        <Input
          type="email"
          name="email"
          placeholder={intl.formatMessage({
            id: "payment.form.email.placeholder",
          })}
          id="email"
          required
          mb="4"
        />
        <Label htmlFor="message">{intl.formatMessage({ id: "payment.form.message.label" })}</Label>
        <Textarea
          rows="2"
          type="text"
          name="message"
          placeholder={intl.formatMessage({
            id: "payment.form.message.placeholder",
          })}
          id="message"
          mb="5"
        />
        <Button type="submit">{intl.formatMessage({ id: "payment.form.confirm" })}</Button>
      </Flex>
    </Form>
  );

  return (
    <>
      {renderForm(true)}
      <Modal open={open} onClose={onClose} center styles={{ modal: { borderRadius: "6px" } }}>
        {!messageSent ? (
          renderForm(false)
        ) : (
          <>
            <H3 mb={4} pt={0} textAlign="center" color="dark.1">
              {intl.formatMessage({ id: "payment.choose.payment" })}
            </H3>
            <Grid gridTemplateColumns={["auto"]} px={[2, 2]} gridGap={[5, 3]} mb="4">
              <Box px={[2, 2]} justifyContent="center" textAlign="center" order={locale === "pt" ? 1 : 2}>
                <Img src="/img/pix_logo.png" width="200" mt={4} />
                <Text fontSize={2} color="dark.1" fontWeight="500" mt="2" mb="2" textAlign="center">
                  {intl.formatMessage({ id: "payment.pix.title" })}
                </Text>
                <Text textAlign="center" mb="5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage(
                        {
                          id: "payment.pix.description",
                        },
                        { amount: contribution.price }
                      ),
                    }}
                  />
                </Text>
                {/* Display the QR code generated by useEffect */}
                {qrCodeUrl && <img src={qrCodeUrl} alt="PIX QR Code" style={{ maxWidth: 200 }} />}
              </Box>
              {/* <Box
                px={[2, 2]}
                justifyContent="center"
                textAlign="center"
                order={locale === "pt" ? 2 : 3}
              >
                <Img src="/img/bb_logo.png" width="200" mt={4} />
                <Text
                  fontSize={2}
                  color="dark.1"
                  fontWeight="500"
                  mt="2"
                  mb="2"
                >
                  {intl.formatMessage({ id: "payment.transfer.title" })}
                </Text>
                <Text mb="5">
                  {intl.formatMessage({ id: "payment.transfer.description" })}
                </Text>
                <Link
                  target="_blank"
                  href={`https://www49.bb.com.br/pagar-receber/#/${bbId}`}
                >
                  {intl.formatMessage({ id: "payment.transfer.action" })}
                </Link>
              </Box>
              <Box
                px={[2, 2]}
                justifyContent="center"
                textAlign="center"
                order={locale === "pt" ? 3 : 1}
              >
                <Img src="/img/paypal_logo.png" width="200" mt={4} />
                <Text
                  fontSize={2}
                  color="dark.1"
                  fontWeight="500"
                  mt="2"
                  mb="2"
                  textAlign="center"
                >
                  {intl.formatMessage({ id: "payment.cc.title" })}
                </Text>
                <Text textAlign="center" mb="5">
                  {intl.formatMessage({ id: "payment.cc.description" })}
                </Text>
                <PaypalButton id={paypalId}>
                  {intl.formatMessage({ id: "payment.cc.action" })}
                </PaypalButton>
              </Box> */}
            </Grid>
          </>
        )}
      </Modal>
    </>
  );
};

PaymentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  contribution: PropTypes.object.isRequired,
};

const Form = styled.form`
  width: 100%;
`;

const Img = styled.img`
  ${space};
`;

const H3 = styled.h3`
  ${color};
  ${space};
  ${typography};
`;

export default PaymentModal;
