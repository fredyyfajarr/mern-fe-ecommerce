import React from 'react';
import NavList from './NavList';
import { NavLink } from 'react-router-dom';
import { BsCart3, BsPerson, BsHeart } from 'react-icons/bs';
import { GiRunningShoe } from 'react-icons/gi';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import customAPI from '../api';
import { logoutUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import { clearCartItem } from '../features/cartSlice';
import ThemeSwitcher from './ThemeSwitcher';

const Nav = () => {
  const user = useSelector((state) => state.userState.user);
  const countInCart = useSelector((state) => state.cartState.numItemsInCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);

  const handlingLogout = async () => {
    try {
      await customAPI.get('/auth/logout');
      dispatch(logoutUser());
      dispatch(clearCartItem());
      navigate('/');
    } catch (error) {
      dispatch(logoutUser());
      dispatch(clearCartItem());
      navigate('/');
    }
  };
  return (
    <nav className="bg-base-200 sticky top-0 z-50 shadow-md">
      <div className="navbar mx-auto max-w-6xl px-8">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center rounded-full hover:scale-105 transition-all duration-200"
          >
            <GiRunningShoe className="hover:rotate-12 transition-all" />
          </NavLink>
          {/* Mobile Device */}
          <div className="lg:hidden">
            <button
              className="btn btn-ghost hover:bg-primary hover:text-white transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-6 flex items-center justify-center relative">
                <span
                  className={`font-bold absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? 'rotate-45' : '-translate-y-2'
                  }`}
                ></span>
                <span
                  className={`font-bold absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`font-bold absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? '-rotate-45' : 'translate-y-2'
                  }`}
                ></span>
              </div>
            </button>
            {/* Overlay */}
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onClick={() => setIsOpen(false)}
            ></div>
            {/* Sliding Menu */}
            <div
              className={`fixed top-0 left-0 h-full w-64 bg-base-200 shadow-xl transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="p-4">
                <NavLink to="/" className="flex items-center gap-2 mb-6">
                  <GiRunningShoe className="text-3xl text-primary" />
                  <span className="text-xl font-bold">FrevanShop</span>
                </NavLink>
                <ul className="menu font-bold p-0">
                  <NavList />
                </ul>
              </div>
            </div>
          </div>
          {/* PC Device */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal">
              <NavList />
            </ul>
          </div>
        </div>
        <div className="navbar-end gap-2">
          <ThemeSwitcher /> {/* Add this line */}
          <NavLink
            to="/carts"
            className="btn btn-ghost btn-circle btn-md hover:bg-primary hover:text-white transition-all"
          >
            <div className="indicator">
              <BsCart3 className="text-xl" />
              <span className="badge badge-primary badge-sm indicator-item animate-pulse">
                {countInCart}
              </span>
            </div>
          </NavLink>
          {user && (
            <>
              <button
                className="btn btn-ghost btn-circle btn-md hover:bg-primary hover:text-white transition-all"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <BsPerson className="text-xl" />
              </button>

              {/* User Menu Overlay */}
              <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
                  isUserMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setIsUserMenuOpen(false)}
              ></div>

              {/* User Menu Slide Panel */}
              <div
                className={`fixed top-0 right-0 h-full w-64 bg-base-200 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
                  isUserMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <div className="p-4 h-full flex flex-col">
                  {/* Logo and Close Button Section */}
                  <div className="text-center pt-4 pb-8">
                    <div className="flex justify-end">
                      <button
                        onClick={() => setIsUserMenuOpen(false)}
                        className="btn btn-ghost btn-sm btn-circle"
                      >
                        ✕
                      </button>
                    </div>
                    <img src="/logo-sepatu-biru.png" alt="" className="h-12 w-36 drop-shadow-lg mx-auto animate-bounce"/>
                    <h2 className="text-xl font-bold mt-2">FrevanShop</h2>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg drop-shadow-2xl">
                      <span className="font-semibold text-primary block">
                        Welcome back,
                      </span>
                      <span className="captitalize text-lg font-bold">
                        {user.name || 'User'} 😊
                      </span>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <ul className="menu p-0 gap-3">
                    <li>
                      <NavLink
                        to={`/profile/${user.name}`}
                        className={({ isActive }) =>
                          `relative flex items-center gap-2 font-bold ${
                            isActive ? 'text-primary bg-primary/10' : 'hover:text-primary'
                          } bg-base-100 transition-all duration-300 overflow-hidden group py-3 px-4 rounded-lg`
                        }
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <span className="absolute left-0 w-0 h-full bg-primary/10 transition-all duration-300 -z-10 group-hover:w-full rounded-lg"></span>
                        <span className="absolute left-0 w-1 h-0 bg-primary transition-all duration-300 group-hover:h-full rounded-l-lg"></span>
                        <BsPerson className="text-lg transform group-hover:scale-110 transition-transform duration-300" />
                        <span className="transform group-hover:translate-x-2 transition-transform duration-300">Profile</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/wishlist"
                        className={({ isActive }) =>
                          `relative flex items-center gap-2 font-bold ${
                            isActive ? 'text-primary bg-primary/10' : 'hover:text-primary'
                          } bg-base-100 transition-all duration-300 overflow-hidden group py-3 px-4 rounded-lg`
                        }
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <span className="absolute left-0 w-0 h-full bg-primary/10 transition-all duration-300 -z-10 group-hover:w-full rounded-lg"></span>
                        <span className="absolute left-0 w-1 h-0 bg-primary transition-all duration-300 group-hover:h-full rounded-l-lg"></span>
                        <BsHeart className="text-lg transform group-hover:scale-110 transition-transform duration-300" />
                        <span className="transform group-hover:translate-x-2 transition-transform duration-300">My Wishlist</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/order"
                        className={({ isActive }) =>
                          `relative flex items-center gap-2 font-bold ${
                            isActive ? 'text-primary bg-primary/10' : 'hover:text-primary'
                          } bg-base-100 transition-all duration-300 overflow-hidden group py-3 px-4 rounded-lg`
                        }
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <span className="absolute left-0 w-0 h-full bg-primary/10 transition-all duration-300 -z-10 group-hover:w-full rounded-lg"></span>
                        <span className="absolute left-0 w-1 h-0 bg-primary transition-all duration-300 group-hover:h-full rounded-l-lg"></span>
                        <BsCart3 className="text-lg transform group-hover:scale-110 transition-transform duration-300" />
                        <span className="transform group-hover:translate-x-2 transition-transform duration-300">My Orders</span>
                      </NavLink>
                    </li>
                  </ul>

                  {/* Logout Button at Bottom */}
                  <div className="mt-8 pb-4">
                    <div className="divider my-2"></div>
                    <button
                      onClick={() => {
                        handlingLogout();
                        setIsUserMenuOpen(false);
                      }}
                      className="btn btn-error btn-outline w-full font-bold hover:text-white hover:bg-red-500 hover:border-red-500"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
