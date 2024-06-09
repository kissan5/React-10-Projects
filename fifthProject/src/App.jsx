import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
<<<<<<< HEAD
import { IoIosContact } from "react-icons/io";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState([]);
=======
import {IoIosContact } from "react-icons/io"
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";


const App = () => {
  const [contacts, setContacts] = useState([]);
>>>>>>> e3c684685468838ea77faa5a9d01a99ad439b754

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
<<<<<<< HEAD
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
              className="text-5xl cursor-pointer text-white"
            />
          </div>
        </div>

        <div>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center border-b border-gray-300 py-2"
            >
              <IoIosContact className="text-white text-5xl mr-2" />
              <div className="text-white">
                <h2>{contact.name}</h2>
                <p>{contact.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
    </>
=======
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {}
    };
    getContacts();
  }, []);

  return (
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
          <AiFillPlusCircle className="text-5xl cursor-pointer text-white " />
        </div>
      </div>

<div>
 { contacts.map((contact) => (
  <div key={contact.id}>
    <IoIosContact />
    <div className="text-white">
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
    </div>
  </div>
 )  )}
</div>

    </div>
>>>>>>> e3c684685468838ea77faa5a9d01a99ad439b754
  );
};

export default App;
