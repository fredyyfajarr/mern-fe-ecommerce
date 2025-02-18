import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: 'abouts',
    text: 'abouts',
  },
  {
    id: 3,
    url: 'products',
    text: 'products',
  },
  {
    id: 4,
    url: 'order',
    text: 'orders',
  },
  {
    id: 5,
    url: 'checkout',
    text: 'checkout',
  },
];

const NavList = () => {
  const user = useSelector((state) => state.userState.user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === 'order' || url === 'checkout') && !user) {
          return null;
        }
        return (
          <li key={id} className="my-2 lg:my-0">
            <NavLink 
              className={({ isActive }) => `
                font-bold lg:px-5 capitalize
                lg:hover:text-primary
                block w-full py-2 px-4
                transition-all duration-200
                hover:bg-primary/10 hover:text-primary
                hover:outline hover:outline-2 hover:outline-primary
                rounded-lg
                ${isActive ? 'text-primary' : ''}
              `}
              to={url}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavList;
