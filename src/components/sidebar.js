import React from 'react';
import './sidebar.css';
const SideBar = ({ openClass }) => {
  return (
    <nav className={openClass === 'open' ? 'opneSidebar' : ''}>
      <ul className="navlist">
        <li>
          <a className="menu-item" href="/">
            Home
          </a>
        </li>

        <li>
          <a className="menu-item" href="/skills">
            Skills
          </a>
        </li>

        <li>
          <a className="menu-item" href="/projects">
            Projects
          </a>
        </li>
        <li>
          <a className="menu-item" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="menu-item" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
