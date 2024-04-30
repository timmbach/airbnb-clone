import React from "react";

type Props = {};

function ContactButton({}: Props) {
  return (
    <div className="py-4 px-6 bg-airbnb hover:bg-airbnbDark transition text-white rounded-xl cursor-pointer select-none">
      Contact
    </div>
  );
}

export default ContactButton;
