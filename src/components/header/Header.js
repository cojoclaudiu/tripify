import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import './Header.css';

const headerNavLinks = [
  { path: '/signin', title: 'Sign In' },
  { path: '/review', title: 'Review' },
  { path: '/submit', title: 'Submit' }
];

const Header = () => {
  return (
    <header className="header widthAlign">
      <nav className="headerNav">
        <div className="headerLogo">
          <h1>
            <Link to="/">tripify</Link>
          </h1>
        </div>

        <Search />

        <ul className="headerNavLinks">
          {headerNavLinks.map((link, index) => (
            <li key={index}>
              <Link className={link.title === 'Submit' ? 'navLink active' : 'navLink'} to={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
