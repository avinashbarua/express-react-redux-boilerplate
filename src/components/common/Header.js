import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <ul className="c-nav c-nav--inline a-nav">
        <li className="c-nav__item">
            <IndexLink to="/" activeClassName="active">Logo</IndexLink>
        </li>
        <li className="c-nav__item c-nav__item--right">
            <Link to="/signup" activeClassName="active">SignUp/LogIn</Link>
        </li>
        <li className="c-nav__item c-nav__item--right">
            <Link to="/about" activeClassName="active">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
