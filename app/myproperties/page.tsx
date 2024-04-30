import React from "react";
import PropertyList from "../components/properties/PropertyList";

type Props = {};

function page({}: Props) {
  return (
    <div className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="mt-6 mb-2 text-2xl">My properties</h1>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <PropertyList />
      </div>
    </div>
  );
}

export default page;
