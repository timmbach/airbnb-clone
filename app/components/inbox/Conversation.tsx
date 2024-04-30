import React from "react";

type Props = {};

function Conversation({}: Props) {
  return (
    <div className="select-none py-6 px-4 border border-gray-300 rounded-xl cursor-pointer">
      <p className="mb-6 text-xl">John Doe</p>

      <p className="text-airbnbDark">Go to conversation</p>
    </div>
  );
}

export default Conversation;
