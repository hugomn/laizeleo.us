import React from "react";
import MainTitle from "../../MainTitle";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { Grid } from "../../Grid";
import { Box } from "../../Box";
import Text from "../../Text";
import { Orator } from "../../../constants/fonts";
import { FixedContainer } from "../../FixedContainer";
import { useIntl } from "react-intl";

const Us = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query UsQuery {
      groomImage: file(relativePath: { eq: "images/groom2.png" }) {
        childImageSharp {
          sizes(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpSizes
          }
        }
      }
      brideImage: file(relativePath: { eq: "images/bride2.png" }) {
        childImageSharp {
          sizes(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  `);

  return (
    <FixedContainer>
      <MainTitle mb={0} title="index.us.title" subtitle="index.us.subtitle" />
      <Grid gridTemplateColumns={["auto", "auto", "1fr 1fr"]}>
        <Box px={[3, 5]} mb={[4, 4, 0]}>
          <Box px={[5]}>
            <Img sizes={data.brideImage.childImageSharp.sizes} />
          </Box>
          <Text fontFamily={Orator} fontSize={5} textAlign="center" color="dark.1" mt="4" mb="2">
            Laiz
          </Text>
          <Text textAlign="center">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "us.statement.laiz" }) }} /> - <b>Léo</b>
          </Text>
        </Box>
        <Box px={[3, 5]} mb={[6, 6, 0]}>
          <Box px={[5]}>
            <Img sizes={data.groomImage.childImageSharp.sizes} />
          </Box>

          <Text fontFamily={Orator} fontSize={5} textAlign="center" color="dark.1" mt="4" mb="2">
            Léo
          </Text>
          <Text textAlign="center">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "us.statement.leo" }) }} /> - <b>Laiz</b>
          </Text>
        </Box>
      </Grid>
    </FixedContainer>
  );
};

export default Us;
