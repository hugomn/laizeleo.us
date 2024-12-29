import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import { FixedContainer } from "../../FixedContainer";
import { useIntl } from "react-intl";

const Dresscode = () => {
  const intl = useIntl();
  return (
    <FixedContainer>
      <MainTitle title="index.dresscode.title" subtitle="index.dresscode.subtitle" />
      <Subtitle mb={5}>
        <span
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({
              id: "index.dresscode.description",
            }),
          }}
        />
      </Subtitle>
    </FixedContainer>
  );
};

export default Dresscode;
