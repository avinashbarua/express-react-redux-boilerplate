import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
  constructor(props,context){
    super(props,context);
    this.navBarToggle = this.navBarToggle.bind(this);
  }
  navBarToggle(event) {
    event.preventDefault();
    let navUl = document.querySelector('ul.c-nav');
    navUl.classList.toggle("c-nav--inline");
   /* if(navUl.classList.indexOf("c-nav--inline") == -1){
      navUl.className += " c-nav--inline";
    }
    else{

    }*/
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
