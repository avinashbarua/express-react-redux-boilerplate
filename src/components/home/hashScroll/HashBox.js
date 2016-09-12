import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

// import components
import HashScrollBox from './HashScrollBox';

class HashBox extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.popOverlay = this.popOverlay.bind(this);
  }

  scrollLeft() {
    let scrollDiv = document.getElementById('scroll-box-container');
    scrollDiv.scrollLeft +=300;
  }
  scrollRight() {
    let scrollDiv = document.getElementById('scroll-box-container');
    scrollDiv.scrollLeft -=300;
  }

  popOverlay(event) {
    event.preventDefault();
    /*document.getElementById('cardfront'+id).style.display = "none";
    document.getElementById('cardback'+id).style.display = "block";*/
    console.log(event.target.parentNode.parentNode.id);
  }

  render() {
    const hashtags = this.props.hashtags;
    return (
      <div style={{textAlign: "center"}}>
        <h1>into hashtags? got it!</h1>
        <div id="scroll-box-container">
          <HashScrollBox hashtags={hashtags} onShowtweets={this.popOverlay}/>
        </div>
        <button className="btn btn-3" onClick={this.scrollRight}>«</button>
        <button className="btn btn-3" onClick={this.scrollLeft}>»</button>
      </div>
    );
  }
}

HashBox.propTypes = {
  hashtags: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    hashtags: state.hashtags
  };
}


export default connect(mapStateToProps)(HashBox);
