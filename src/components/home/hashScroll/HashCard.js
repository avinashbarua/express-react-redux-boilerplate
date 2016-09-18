import React, {PropTypes} from 'react';

const HashCard = ({tag, tweet_volume, image, id, tweetTexts, onShow}) => {
  return (
    <div>
      <div id={"cardfront"+id} className="projectx-card" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('+image+')'}}>
        <div className="projectx-card-text">
          <h3>#{tag}</h3>
          <p>{tweet_volume}s tweets</p>
          <button
            className="c-button c-button--rounded c-button--ghost c-button--xsmall"
            onClick={onShow}>Show Tweets
          </button>
        </div>
      </div>
      <div id={"cardback"+id} className="projectx-card-overlay">
        <div className="projectx-card-text">
          {tweetTexts.map((tweet) => <p key={tweet.id}>{tweet.text}</p>)}
          <button
            className="c-button c-button--rounded c-button--ghost c-button--xsmall"
            onClick={onShow}>Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

HashCard.propTypes = {
  tag: PropTypes.string.isRequired,
  tweet_volume: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onShow: PropTypes.func.isRequired,
  tweetTexts: PropTypes.array.isRequired
};

export default HashCard;
