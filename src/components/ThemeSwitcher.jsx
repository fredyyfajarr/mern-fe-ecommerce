import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaHeart, FaGhost } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'halloween');

  const themes = [
    { name: 'winter', icon: <FaSun />, label: 'Light' },
    { name: 'night', icon: <FaMoon />, label: 'Dark' },
    { name: 'garden', icon: <FaHeart />, label: 'Valentine' },
    { name: 'halloween', icon: <FaGhost />, label: 'Halloween' },
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        {themes.find(t => t.name === theme)?.icon || <FaSun />}
      </label>
      <ul className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-200 rounded-box w-52">
        {themes.map((t) => (
          <li key={t.name}>
            <button
              className={`flex items-center gap-2 py-2 ${theme === t.name ? 'text-primary' : ''}`}
              onClick={() => setTheme(t.name)}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;