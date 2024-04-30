import Image from "next/image";
import React from "react";

type Props = {};

function MyReservations({}: Props) {
  return (
    <div className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="mt-6 mb-2 text-2xl">My reservations</h1>

      <div className="space-y-4">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/beach_1.jpg"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="beach house"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h2 className="mb-4 text-xl">Property name</h2>
            <div className="">
              <p>
                <strong>Check in date: </strong>14/2/2220
              </p>
              <p>
                <strong>Check out date: </strong>14/2/2220
              </p>
              <p>
                <strong>Number of nights: </strong>2
              </p>
              <p>
                <strong>Total price: </strong>$200
              </p>
            </div>

            <div className="mt-5 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
              Go to property
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyReservations;
