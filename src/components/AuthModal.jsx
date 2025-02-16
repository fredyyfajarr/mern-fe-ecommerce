import React from 'react';
import FormAuth from './FormAuth';

const AuthModal = ({ isOpen, onClose, isRegister }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative z-[101] w-full max-w-md mx-4">
        <div className="relative bg-base-100 rounded-lg shadow-xl">
          <button
            className="absolute right-2 top-2 btn btn-sm btn-circle btn-ghost"
            onClick={onClose}
          >
            ✕
          </button>
          <FormAuth isRegister={isRegister} isModal={true} onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default AuthModal;