import React, {PropTypes} from 'react';

// import components
import HashCard from './HashCard';

const HashContainer = ({hashtags, onShowtweets}) => {
    return (
      <div className="hash-container o-grid o-grid--small-full o-grid--medium-fit o-grid--large-full o-grid--wrap">
        {hashtags.map(hashtag =>
          <HashCard key={hashtag.id}
                    tag={hashtag.name}
                    tweet_volume={hashtag.tweet_volume}
                    image={hashtag.image}
                    id={hashtag.id}
                    tweetTexts={hashtag.tweets}
                    onShow={onShowtweets}/>
        )}
      </div>
    );
};


HashContainer.propTypes = {
  hashtags: PropTypes.array.isRequired,
  onShowtweets: PropTypes.func.isRequired
};


export default HashContainer;



/*
        {hashtags.map(hashtag =>
          <HashCard key={hashtag.id}
                    tag={hashtag.name}
                    tweet_volume={hashtag.tweet_volume}
                    image={hashtag.image}
                    id={hashtag.id}
                    tweetTexts={hashtag.tweets}
                    onShow={onShowtweets}/>
        )}
*/
