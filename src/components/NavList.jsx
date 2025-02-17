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
          <li key={id}>
            <NavLink className="font-bold lg:px-5 capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavList;
