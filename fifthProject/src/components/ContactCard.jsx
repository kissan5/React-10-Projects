import React from "react";
import { IoIosContact } from "react-icons/io";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

const ContactCard = ({contact}) => {
  return (
    <div
      key={contact.id}
      className="flex items-center justify-between border-b border-gray-300 py-2"
    >
      <div className="flex items-center">
        <IoIosContact className="text-blue text-5xl mr-2" />
        <div className="text-white">
          <h2>{contact.name}</h2>
          <p>{contact.email}</p>
        </div>
      </div>
      <div className="flex">
        <PiDotsThreeOutlineVerticalLight className="text-white mr-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default ContactCard;
