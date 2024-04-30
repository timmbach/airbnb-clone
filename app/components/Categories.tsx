import Image from "next/image";
import React from "react";

type Props = {};

function Categories({}: Props) {
  return (
    <div className="pt-0 lg:pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 font-semibold flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
          alt="pools png"
          width={20}
          height={20}
        />
        <span className="text-xs">Amazing pools</span>
      </div>
      <div className="pb-4 font-semibold flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
          alt="islands png"
          width={20}
          height={20}
        />
        <span className="text-xs">Islands</span>
      </div>
      <div className="pb-4 font-semibold flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="	https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
          alt="omg png"
          width={20}
          height={20}
        />
        <span className="text-xs">OMG!</span>
      </div>
      <div className="pb-4 font-semibold flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="	https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
          alt="earthhomes png"
          width={20}
          height={20}
        />
        <span className="text-xs">Earth homes</span>
      </div>
      <div className="pb-4 font-semibold flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
          alt="tropical png"
          width={20}
          height={20}
        />
        <span className="text-xs">Tropical</span>
      </div>
    </div>
  );
}

export default Categories;
