<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
>>>>>>> b6020ed (first commit)

const Header = () => {
  const user = useSelector((state) => state.userState.user);
  return (
<<<<<<< HEAD
    <header className="bg-neutral shadow-lg">
      <div className="mx-auto max-w-6xl px-8 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo dan Nama Website */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary"></span>
            <div className="md:flex md:flex-row flex-col pl-0 md:pl-2">
              <span className="text-xl md:text-xl sm:text-base xs:text-sm font-bold text-neutral-content">
                {user ? "Welcome, " : "ISSAC SHOP"}
              </span>
              {user && (
                <span className="py-0.5 text-xl md:text-xl sm:text-base xs:text-sm font-bold text-neutral-content md:ml-1">
                  {user.name} !
                </span>
              )}
            </div>
          </Link>

          {/* User Section */}
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <button className="btn btn-primary btn-sm">Dashboard</button>
                <button className="btn btn-ghost btn-sm">Logout</button>
              </div>
            ) : (
              <div className="flex space-x-3">
                <Link to="/login" className="btn btn-primary btn-sm">
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline btn-sm text-neutral-content hover:text-primary"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
=======
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="mx-auto max-w-6xl px-8 flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.name}</p>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign In
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Sign Up
            </Link>
          </div>
        )}
>>>>>>> b6020ed (first commit)
      </div>
    </header>
  );
};

export default Header;
