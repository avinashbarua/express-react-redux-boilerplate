import React, {PropTypes} from 'react';
import {Link} from 'react-router';
// import components

const HashBoxFooter = ({scrollLeft, scrollRight }) => {
    return (
      <div>
        <div className="o-grid">
          <div className="o-grid__cell o-grid__cell--width-90 hashFooterBar">
            <Link to="/hashtags"><div>LINK</div></Link>
          </div>
          <div className="o-grid__cell hashFooterBar">
            <button className="btn-hashfooter" onClick={scrollLeft}>»</button>
            <button className="btn-hashfooter" onClick={scrollRight}>«</button>
          </div>
        </div>
      </div>
    );
};

HashBoxFooter.propTypes = {
  scrollLeft: PropTypes.func.isRequired,
  scrollRight: PropTypes.func.isRequired
};



export default HashBoxFooter;
