import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      menuToggle : false
    };
    this.navBarToggle = this.navBarToggle.bind(this);
  }
  navBarToggle(event) {
    event.preventDefault();
    this.setState({menuToggle: !this.state.menuToggle});
    let navLi = document.querySelectorAll('.menu-item');
    Array.prototype.forEach.call(navLi,(li) => {
      if(!this.state.menuToggle){
        li.style.display = 'none';
      }
      else {
        li.style.display = 'block';
      }
    });
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
