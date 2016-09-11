import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  render(){
    return (
      <div className="o-container--super">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
 children : PropTypes.object.isRequired
};

export default App;
