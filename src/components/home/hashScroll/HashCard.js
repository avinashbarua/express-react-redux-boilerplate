import React, {PropTypes} from 'react';

const HashCard = ({tag, tweets, image, id, onShow}) => {
  return (
    <div>
      <div id={"cardfront"+id} className="projectx-card" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('+image+')'}}>
        <div className="projectx-card-text">
          <h3>#{tag}</h3>
          <p>{tweets}s tweets</p>
          <p>{id}</p>
          <button
            className="c-button c-button--rounded c-button--ghost c-button--xsmall"
            onClick={onShow}>Show Tweets
            </button>
        </div>
      </div>
      <div id={"cardback"+id} className="projectx-card-overlay">
        <span>
        Click to see more
        There is more stue stuffThere is more stuffThere is more stuff
        There is more stuffTherfTherefThere is more stuff ...
        </span>
      </div>
    </div>
  );
};

HashCard.propTypes = {
  tag: PropTypes.string.isRequired,
  tweets: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onShow: PropTypes.func.isRequired
};

export default HashCard;
