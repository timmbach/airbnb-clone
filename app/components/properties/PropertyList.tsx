import React from "react";
import PropertyListItem from "./PropertyListItem";

type Props = {};

function PropertyList({}: Props) {
  return (
    <>
      <PropertyListItem />
      <PropertyListItem />
      <PropertyListItem />
      <PropertyListItem />
    </>
  );
}

export default PropertyList;
