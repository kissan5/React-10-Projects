import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="relative min-h-[200px] max-w-md bg-white p-4 rounded shadow-lg">
              <div className="flex justify-end">
                <AiOutlineClose
                  onClick={onClose}
                  className="self-end text-2xl cursor-pointer"
                />
              </div>
              {children}
            </div>
          </div>
          <div
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black bg-opacity-25 backdrop-blur-sm"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
