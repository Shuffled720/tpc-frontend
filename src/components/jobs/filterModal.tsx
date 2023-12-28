// components/FilterModal.tsx
import React, { ReactNode, useEffect, useRef } from "react";

interface FilterModalProps {
  children: ReactNode;
  closeModal: () => void;
  isOpen: any;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  children,
  closeModal,
}) => {
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-96" ref={modalRef}>
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default FilterModal;
