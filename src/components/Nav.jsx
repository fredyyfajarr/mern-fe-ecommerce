import React from "react";
import NavList from "./NavList";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { GiRunningShoe } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import customAPI from "../api";
import { logoutUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { clearCartItem } from "../features/cartSlice";

const Nav = () => {
  const user = useSelector((state) => state.userState.user);
  const countInCart = useSelector((state) => state.cartState.numItemsInCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const handlingLogout = async () => {
    try {
      await customAPI.get("/auth/logout");
      dispatch(logoutUser());
      dispatch(clearCartItem());
      navigate("/");
    } catch (error) {
      dispatch(logoutUser());
      dispatch(clearCartItem());
      navigate("/");
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
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden hover:bg-primary hover:text-white transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-6 flex items-center justify-center relative">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-200 rounded-box w-52 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <NavList />
            </ul>
          </div>
          {/* PC Device */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal">
              <NavList />
            </ul>
          </div>
        </div>
        <div className="navbar-end gap-2">
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
            <details className="dropdown dropdown-end">
              <summary className="btn btn-ghost btn-circle btn-md hover:bg-primary hover:text-white transition-all">
                <BsPerson className="text-xl" />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg mt-2">
                <li className="font-semibold text-center py-2 text-primary">
                  Hi, {user.name || "User"}
                </li>
                <div className="divider my-0"></div>
                <li>
                  <NavLink to="/profile" className="hover:text-primary">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/orders" className="hover:text-primary">
                    My Orders
                  </NavLink>
                </li>
                <div className="divider my-0"></div>
                <li>
                  <button
                    onClick={handlingLogout}
                    className="text-red-500 hover:text-red-700 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </details>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
