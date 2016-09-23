import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as hashActions from '../../../actions/hashActions';

// import components
import HashContainer from './HashContainer';
import HashBoxFooter from './HashBoxFooter';

class HashBox extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {};
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
    let id = event.target.parentNode.parentNode.id;
    id = id.match(/[0-9].*/)[0];
    this.props.actions.toggleHashCardSuccess(this.props.hashtags,id);
    let hashtag = this.props.hashtags.filter((tag) => tag.id == id)[0];
    if(!hashtag.toggle){
      document.getElementById('cardfront'+id).style.display = "none";
      document.getElementById('cardback'+id).style.display = "block";
    }
    else {
      document.getElementById('cardfront'+id).style.display = "block";
      document.getElementById('cardback'+id).style.display = "none";
    }
  }

  render() {
    const hashtags = this.props.hashtags;
    return (
      <div className="o-grid o-grid--small-full o-grid--wrap hash-box contentOfSkew">
          <div className="o-grid__cell o-grid__cell--width-100">
            <HashContainer hashtags={hashtags} onShowtweets={this.popOverlay}/>
          </div>
          <div className="o-grid__cell o-grid__cell--width-100">
            OK
          </div>
      </div>
    );
  }
}

HashBox.propTypes = {
  hashtags: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    hashtags: state.hashtags
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(hashActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HashBox);
