import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchFIlters from "./SearchFIlters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="border w-full fixed top-0 left-0 border-b bg-white z-10 py-4 lg:p-6">
      <div className="ax-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="airbnb logo" width={150} height={38} />
          </Link>
          <div className="flex space-x-6">
            <SearchFIlters />
          </div>

          <div className="flex items-center space-x-6">
            <AddPropertyButton /> - <UserNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
