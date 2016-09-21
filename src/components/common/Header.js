import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <ul className="c-nav c-nav--inline">
        <li className="c-nav__item">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
        </li>
        <li className="c-nav__item">
            <Link to="/about" activeClassName="active">About</Link>
        </li>
        <li className="c-nav__item c-nav__item--right">
            <Link to="/signup" activeClassName="active">SignUp/LogIn</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
