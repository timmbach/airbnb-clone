import React from "react";

type Props = {};

const SearchFIlters = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-between border h-[48px] lg:h-[64px] rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Where</p>
            <p className="text-sm ">Wanted location</p>
          </div>
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check in</p>
            <p className="text-sm ">Add dates</p>
          </div>
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check in</p>
            <p className="text-sm ">Add dates</p>
          </div>
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm ">Add guests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="p-2 lg:p-4 bg-airbnb hover:bg-airbnbDark cursor-pointer rounded-full text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{
              display: "block",
              fill: "none",
              height: "12px",
              width: "12px",
              stroke: "currentColor",
              strokeWidth: "5.333333333333333",
              overflow: "visible",
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchFIlters;
