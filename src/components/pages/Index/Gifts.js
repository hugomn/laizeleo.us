import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import { FixedContainer } from "../../FixedContainer";
import BtnLink from "../../BtnLink";
import styled from "styled-components";
import { space } from "styled-system";
import { Grid } from "../../Grid";
import { Box } from "../../Box";
import Text from "../../Text";
import Card from "../../Card";
import { useIntl } from "react-intl";

const Gifts = () => {
  const intl = useIntl();
  const { locale } = intl;
  const url = `${locale !== "pt" ? "/" + locale : ""}/presentes`;
  return (
    <FixedContainer>
      <MainTitle title="index.gifts.title" subtitle="index.gifts.subtitle" />
      <Subtitle mb={5}>{intl.formatMessage({ id: "index.gifts.description" })}</Subtitle>
      <Box textAlign="center">
        <BtnLink to={`${url}/lista`} my="40px" mx="4" px={5}>
          {intl.formatMessage({ id: "index.gifts.list.action" })}
        </BtnLink>
      </Box>
    </FixedContainer>
  );
};

export default Gifts;
