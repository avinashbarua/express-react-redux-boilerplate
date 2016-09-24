import React from 'react';
import { Link, IndexLink } from 'react-router';

/*const Header = ({toggle}) => {
  componentDidMount: function(){
    console.log("poop");
  }

  return (
    <nav>
      <ul className="c-nav c-nav--inline a-nav">
        <li className="c-nav__item">
            <a className="menu-toggle" href="#" onClick={toggle}>X</a>
            <a className="menu-toggla" href="#" onClick={toggle}>Y</a>
        </li>
        <li className="c-nav__item c-nav__item--right menu-item">
            <IndexLink to="/" activeClassName="active">Logo</IndexLink>
        </li>
        <li className="c-nav__item c-nav__item--right menu-item">
            <Link to="/signup" activeClassName="active">SignUp/LogIn</Link>
        </li>
        <li className="c-nav__item c-nav__item--right menu-item">
            <Link to="/about" activeClassName="active">About</Link>
        </li>
      </ul>
    </nav>
  );
};*/

class Header extends React.Component {
  constructor(props,context){
    super(props,context);
  }
  componentDidMount(){
    let Ul = document.querySelector('.c-nav');
    if(screen.width<=700){
      Ul.classList.remove('c-nav--inline');
    }
  }
  render() {
    return (
      <nav>
        <ul className="c-nav c-nav--inline a-nav">
          <li className="c-nav__item">
              <a className="logo" href="#">LOGO</a>
              <a className="menu-toggle" href="#" onClick={this.props.toggle}>X</a>
          </li>
          <li className="c-nav__item c-nav__item--right menu-item">
              <Link to="/signup" activeClassName="active">SignUp/LogIn</Link>
          </li>
          <li className="c-nav__item c-nav__item--right menu-item">
              <Link to="/about" activeClassName="active">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
