import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import { FixedContainer } from "../../FixedContainer";
import { useIntl } from "react-intl";

const Tips = () => {
  const intl = useIntl();
  return (
    <FixedContainer>
      <MainTitle title="index.tips.title" subtitle="index.tips.subtitle" />
      <Subtitle mb={5}>
        <span
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({
              id: "index.tips.description",
            }),
          }}
        />
      </Subtitle>
    </FixedContainer>
  );
};

export default Tips;
