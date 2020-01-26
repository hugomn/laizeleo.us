import React, { useState } from "react";
import Subtitle from "../Subtitle";
import GiftCardList from "../GiftCardList";
import { FixedContainer } from "../FixedContainer";
import MainTitle from "../MainTitle";
import { useIntl } from "react-intl";
import PaymentModal from "../PaymentModal";

const Gifts = props => {
  const intl = useIntl();
  const gifts = props.data.gifts.edges.map(g => g.node);

  const [modalOpen, setModalOpen] = useState(false);
  const [gift, setGift] = useState(gifts[0]);
  const handleBuy = gift => {
    setGift(gift);
    setModalOpen(true);
  };
  return (
    <FixedContainer pt="4" pb="4">
      <MainTitle title="index.gifts.title" subtitle="index.gifts.subtitle" />
      <Subtitle mb={5}>{intl.formatMessage({ id: "gifts.description" })}</Subtitle>
      <PaymentModal
        open={modalOpen}
        bbId={gift.bbId}
        paypalId={gift.paypalId}
        onClose={() => setModalOpen(false)}
      />
      <GiftCardList gifts={gifts} onBuy={handleBuy} />
    </FixedContainer>
  );
};

export default Gifts;