import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-responsive-modal";
import styled from "styled-components";
import { space, color, typography } from "styled-system";
import { useIntl } from "react-intl";
import { Grid } from "./Grid";
import { Box } from "./Box";
import Text from "./Text";
import Link from "./Link";
import PaypalButton from "./PaypalButton";
import { Flex } from "./Flex";
import { Input } from "./Input";
import { Label } from "./Label";
import Button from "./Button";
import getFormData from "get-form-data";
import Textarea from "./Textarea";

import QRCode from "qrcode";
import { Pix } from "pix-qrcode";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const PaymentModal = (props) => {
  const { contribution, onClose, open } = props;
  const { id, bbId, paypalId } = contribution;
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  useEffect(() => {
    // We can define an async function inside useEffect
    // eslint-disable-next-line require-jsdoc
    async function generateQRCode() {
      const pixKey = "hello@hugo.im"; // Sua chave PIX
      const pixName = "Hugo Nogueira"; // Nome do recebedor
      const pixCity = "Juiz de Fora"; // Cidade do recebedor
      const pixValue = 100.00; // Valor em Reais
      const pixDescription = "Pagamento de Produto X"; // Descrição do pagamento

      // Gerar o payload do PIX
      const pix = Pix({
        key: pixKey,
        name: pixName,
        city: pixCity,
        transactionId: "ID1234", // ID da transação (opcional)
        message: pixDescription,
        amount: pixValue.toFixed(2),
      });
      try {
        const pixPayload = pix.payload();
        const url = await QRCode.toDataURL(pixPayload);
        setQrCodeUrl(url);
      } catch (err) {
        console.error("Error generating QR Code:", err);
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
      <Flex
        flexDirection="column"
        width={["auto", 600, 800]}
        px={[2, 4, 5]}
        py={[2, 4]}
      >
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
        <Label htmlFor="message">
          {intl.formatMessage({ id: "payment.form.message.label" })}
        </Label>
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
        <Button type="submit">
          {intl.formatMessage({ id: "payment.form.confirm" })}
        </Button>
      </Flex>
    </Form>
  );

  return (
    <>
      {renderForm(true)}
      <Modal
        open={open}
        onClose={onClose}
        center
        styles={{ modal: { borderRadius: "6px" } }}
      >
        {!messageSent ? (
          renderForm(false)
        ) : (
          <>
            <H3 mb={4} pt={0} textAlign="center" color="dark.1">
              {intl.formatMessage({ id: "payment.choose.payment" })}
            </H3>
            <Grid
              gridTemplateColumns={["auto", "auto", "1fr 1fr 1fr"]}
              px={[2, 2]}
              gridGap={[5, 3]}
              mb="4"
            >
              <Box
                px={[2, 2]}
                justifyContent="center"
                textAlign="center"
                order={locale === "pt" ? 1 : 2}
              >
                <Img src="/img/pix_logo.png" width="200" mt={4} />
                <Text
                  fontSize={2}
                  color="dark.1"
                  fontWeight="500"
                  mt="2"
                  mb="2"
                  textAlign="center"
                >
                  {intl.formatMessage({ id: "payment.pix.title" })}
                </Text>
                <Text textAlign="center" mb="5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: "payment.pix.description",
                      }, { amount: contribution.price}),
                    }}
                  />
                </Text>
                <img src={qrCodeUrl} alt="PIX QR Code" />
                <Link
                  target="_blank"
                  href="https://nubank.com.br/pagar/4845h/5gRbZ5cVCq"
                >
                  {intl.formatMessage({ id: "payment.pix.action" })}
                </Link>
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
