import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const links = [
  {
    id: 1,
    url: 'abouts',
    text: 'abouts',
  },
  {
    id: 2,
    url: 'products',
    text: 'products',
  },
  {
    id: 3,
    url: 'order',
    text: 'orders',
  },
  {
    id: 4,
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
            <NavLink className="font-bold capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavList;
