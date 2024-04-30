import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";
import React from "react";

type Props = {};

function PropertyDetailPage({}: Props) {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <p>asas</p>
      <div className="mb-4 w-full h-[64vh] overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/beach_1.jpg"
          className="object-cover w-full h-full"
          alt="beach img "
        />
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-5 gap-4 ">
        <div className="col-span-3 py-6 pr-6">
          <h1 className="mb-4 text-4xl">Property name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms -1 bathroom
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile_pic_1.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt="user name"
            />
            <p>
              <strong>John Doe</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            commodi magni sit rem aliquam asperiores eius eaque repudiandae
            illum harum!
          </p>
        </div>
        <ReservationSidebar />
      </div>
    </main>
  );
}

export default PropertyDetailPage;
