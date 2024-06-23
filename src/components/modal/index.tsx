import { ReactNode } from "react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function ModalOrder({ isOpen, onClose, children}: ModalProps) {
  
  if (!isOpen) {
    return null;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
        <button
          className="absolute flex justify-center items-center top-2 right-2 px-2 border-2 border-slate-400 rounded-full text-gray-600 hover:text-gray-900 transition-all"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}