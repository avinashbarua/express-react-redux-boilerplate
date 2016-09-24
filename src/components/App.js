import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      menuToggle : false
    }
    this.navBarToggle = this.navBarToggle.bind(this);
  }
  navBarToggle(event) {
    event.preventDefault();
    this.setState({menuToggle: !this.state.menuToggle});
    console.log(this.state.menuToggle);
    let navUl = document.querySelector('ul.c-nav');
    let navLi = document.querySelectorAll('.menu-item');
    Array.prototype.forEach.call(navLi,(li) => {
      if(this.state.menuToggle){
        li.style.visibility = 'hidden';
      }
      else {
        li.style.visibility = 'visible';
      }
    });
    navUl.classList.toggle("c-nav--inline");
  }

  render(){
    return (
      <div className="o-container--super">
        <Header toggle={this.navBarToggle}/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
 children : PropTypes.object.isRequired
};

export default App;
