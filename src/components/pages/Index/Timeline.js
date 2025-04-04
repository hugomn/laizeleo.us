import React from "react";
import MainTitle from "../../MainTitle";
import { useStaticQuery, graphql } from "gatsby";
import { Grid } from "../../Grid";
import { Box } from "../../Box";
import Text from "../../Text";
import { FixedContainer } from "../../FixedContainer";
import Card from "../../Card";
import styled from "styled-components";
import { media } from "../../../constants/responsive";
import { Flex } from "../../Flex";
// import { useIntl } from "react-intl";

// export const queryPt = graphql`
//   query TimelinePtQuery {

//   }
// `;

const TImeline = (props) => {
  // const intl = useIntl();
  // const data = useStaticQuery(intl.locale === "pt" ? queryPt : queryEn);
  return (
    <FixedContainer>
      <MainTitle title="index.timeline.title" subtitle="index.timeline.subtitle" mb={4} />
      <Box pl={["3.4em", "5em"]} pr={["0", "5em"]}>
        <Wrapper gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]} gridGap="4.75rem">
          {props.data.timeline.edges.map(({ node }, i) => (
            <ItemCard
              gridRow={[`${i + 1} / ${i + 2}`]}
              gridColumn={[1, 1, (i % 2) + 1]}
              key={node.name}
              p="3"
              right={i % 2}
              data-sal={i % 2 ? "slide-left" : "slide-right"}
            >
              <Flex flexDirection="column">
                {/* <Text display="block" fontWeight="500" color="dark.1">
                  {node.name}
                </Text> */}
                <Text display="block" fontWeight="500" color="brand" mt={0}>
                  {node.date}
                </Text>
                <Text display="block">{node.name}</Text>
              </Flex>
            </ItemCard>
          ))}
        </Wrapper>
      </Box>
    </FixedContainer>
  );
};

const ItemCard = styled(Card)`
  &:before {
    content: "";
    color: $white;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.accentColors[0]};
    border: 8px solid ${({ theme }) => theme.colors.lightColors[2]};
    border-radius: 50%;
    position: absolute;
    margin-left: -75px;
    ${media.lg`
      margin-left: ${({ right }) => (right ? "-72px" : "455px")};
    `}
  }
  &:first-child:before,
  &:last-child:before {
    background-color: ${({ theme }) => theme.colors.brand};
  }
`;

const Wrapper = styled(Grid)`
  position: relative;
  &:before {
    content: "";
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.lightColors[2]};
    position: absolute;
    top: 0;
    left: calc(-2.5em - 2px);
    border-radius: 40px 40px;
    ${media.lg`
      left: calc(50% - 2px);
    `}
  }
`;

export default TImeline;
