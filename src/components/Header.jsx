import React, { useState } from "react";
import { useSelector } from "react-redux";
import AuthModal from './AuthModal';

const Header = () => {
  const user = useSelector((state) => state.userState.user);
  const [showModal, setShowModal] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleOpenModal = (register = false) => {
    setIsRegister(register);
    setShowModal(true);
  };

  return (
    <>
      <header className="bg-neutral shadow-lg">
        <div className="mx-auto max-w-6xl px-8 py-4">
          <nav className="flex justify-between items-center">
            <img 
              className="w-36 h-14 object-contain" 
              src="/logo-sepatu.png" 
              alt="logo" 
            />

            {/* User Section */}
            <div className="flex items-center">
              {user ? (
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-xl sm:text-base xs:text-sm font-bold text-neutral-content">
                    Welcome
                  </span>
                  <span className="text-lg md:text-lg sm:text-sm xs:text-xs font-bold text-neutral-content">
                    {user.name} !
                  </span>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleOpenModal(false)}
                    className="btn btn-primary btn-sm"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleOpenModal(true)}
                    className="btn btn-outline btn-sm text-neutral-content hover:text-primary"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      <AuthModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        isRegister={isRegister}
      />
    </>
  );
};

export default Header;
