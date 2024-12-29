import React from "react";
import MainTitle from "../../MainTitle";
import Subtitle from "../../Subtitle";
import { FixedContainer } from "../../FixedContainer";
import { useIntl } from "react-intl";

const Gifts = () => {
  const intl = useIntl();
  return (
    <FixedContainer>
      <MainTitle title="index.schedule.title" subtitle="index.schedule.subtitle" />
      <Subtitle mb={5}>
        <span
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({
              id: "index.schedule.description",
            }),
          }}
        />
      </Subtitle>
    </FixedContainer>
  );
};

export default Gifts;
