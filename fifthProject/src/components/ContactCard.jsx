import React, { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import Modal from "../components/Modal";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";

const ContactCard = ({ contact, onDelete }) => {
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const toggleViewModal = () => {
    setViewModalOpen(!viewModalOpen);
  };

  const openEditModal = () => {
    setEditModalOpen(true);
    setViewModalOpen(false); // Close the view modal when opening the edit modal
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      console.log("Contact deleted successfully:", id);
      setViewModalOpen(false);
      onDelete(id);
      onClose();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div
      key={contact.id}
      className="flex items-center justify-between border-b border-gray-300 py-2"
    >
      <div className="flex items-center">
        <IoIosContact className="text-blue text-5xl mr-2" />
        <div className="text-white">
          <h2>{contact.name}</h2>
          <p style={{ color: "#636363", fontSize: "0.875rem" }}>
            {contact.phone}
          </p>
          <p style={{ color: "#636363", fontSize: "0.875rem" }}>
            {contact.email}
          </p>
        </div>
      </div>
      

      {/* View Modal */}
      <Modal isOpen={viewModalOpen} onClose={toggleViewModal}>
        <div className="flex flex-col p-4">
          <button
            onClick={openEditModal}
            className="py-2 mt-2 mb-4 h-auto px-4 rounded-md border"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(contact.id)}
            className="py-2 mt-2 mb-4 h-auto px-4 rounded-md border text-white bg-red-700"
          >
            Delete
          </button>
        </div>
      </Modal>

      {/* Edit Modal */}
      <AddAndUpdateContact isUpdate
        isOpen={editModalOpen}
        onClose={closeEditModal}
        initialValues={contact}
        title="Edit Contact"
      />
<div className="flex ">
        <PiDotsThreeOutlineVerticalLight
          className="text-white mr-4 cursor-pointer"
          onClick={toggleViewModal}
        />
      </div>

    </div>
  );
};

export default ContactCard;
