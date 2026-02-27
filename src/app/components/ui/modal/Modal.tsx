"use client";

import { ReactNode, useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

function Modal({ isOpen, onClose, children }: Props) {

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
      "
    >

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

   
      <div
        className="
          relative z-10
          bg-white
          rounded-2xl
          p-6
          max-w-2xl
          w-[90%]
          max-h-[90vh]
          overflow-y-auto
        "
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;