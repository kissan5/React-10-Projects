import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import ContactCard from "./components/ContactCard";
import useDisclouse from "./hooks/useDisclouse";


const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(contactLists);
          return contactLists;
        })

        
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    };
    getContacts();
  }, []);

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2 mb-5 ">
          <div className="relative flex flex-grow items-center">
            <FiSearch className="ml-1 absolute text-white text-2xl " />
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
            <ContactCard key={contact.id} contact={contact} onDelete={handleDeleteContact}/>
          ))}
        </div>
      </div>
      <AddAndUpdateContact
        isOpen={isOpen}
        onClose={onClose}
        
      />
    </>
  );
};

export default App;
