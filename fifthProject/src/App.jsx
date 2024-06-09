import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import ContactCard from "./components/ContactCard";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false); 

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactLists);
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    };
    getContacts();
  }, []);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <FiSearch className="ml-1 absolute text-white text-2xl" />
            <input
              type="text"
              className="h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-9"
            />
          </div>
          <div>
            <AiFillPlusCircle
              onClick={onOpen}
              className="text-5xl cursor-pointer text-blue"
            />
          </div>
        </div>

        <div>
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}/>
          ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default App;
