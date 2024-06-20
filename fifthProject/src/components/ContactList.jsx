import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    setContacts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleUpdate = (updatedContact) => {
    setContacts(contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact));
  };

  return (
    <div>
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default ContactList;
