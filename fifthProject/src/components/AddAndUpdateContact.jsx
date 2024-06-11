import React, { useState } from "react";
import Modal from "./Modal";
import { Formik, Form, Field } from "formik";
import { addDoc, updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, initialValues }) => {
  const [error, setError] = useState("");

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact) => {
    try {
      const contactRef = doc(db, "contacts", contact.id);
      await updateDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      if (isUpdate) {
        // Check if the values are different from initialValues
        if (
          values.name !== initialValues.name ||
          values.email !== initialValues.email ||
          values.phone !== initialValues.phone
        ) {
          await updateContact(values);
          onClose(); // Close the modal after updating the contact
        } else {
          setError("No changes detected. Please update the fields.");
        }
      } else {
        await addContact(values);
        onClose(); // Close the modal after adding the contact
      }
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={initialValues || {
            name: "",
            email: "",
            phone: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-2 rounded-lg">
            <h1 className="font-bold text-center ">
              {isUpdate ? "Update Contact" : "Add Contact"}
            </h1>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="h-10 border" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phone">Phone</label>
              <Field name="phone" className="h-10 border" />
            </div>

            {error && <div className="text-red-500">{error}</div>}

            <button type="submit" className="self-end border bg-blue px-3 py-1.5 text-white rounded">
              {isUpdate ? "Update" : "Add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
