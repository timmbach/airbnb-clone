import Image from "next/image";
import React from "react";

type Props = {};

function PropertyListItem({}: Props) {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src="/beach_1.jpg"
          sizes="(max-width: 768px) 784px, (max-width:1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
          alt="beach house img"
        />
      </div>
      <div className="mt-2 ">
        <p className="text-lg font-bold">Property name</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>$200</strong> per night
        </p>
      </div>
    </div>
  );
}

export default PropertyListItem;
