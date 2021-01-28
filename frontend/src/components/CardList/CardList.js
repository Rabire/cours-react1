import React from "react";
import { Card } from "../";
import { CardListContainer, CardBox } from "./CardList.style";

const Data = require("../Card/Data.json");

const renderItem = Data.map((member, i) => {
  console.log({ i });
  return (
    <CardBox key={i}>
      <Card member={member} />
    </CardBox>
  );
});

export const CardList = () => {
  return <CardListContainer>{renderItem}</CardListContainer>;
};
