import Modal from "./Modal";
import { Formik, Form, Field } from "formik";
import {addDoc, collection} from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdateContact = ({ isOpen, onClose }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db,"contacts");
      await addDoc(contactRef,contact); 
      
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik 
        initialValues={{ 
          name: "",
          email: "",
          phone: "",
         }}
         onSubmit={(values)=> console.log(values)}
        >
          <Form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 ">
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

            <button className="self-end border bg-blue px-3 py-1.5 text-white">Add to Contact</button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
