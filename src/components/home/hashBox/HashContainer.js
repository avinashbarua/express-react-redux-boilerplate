import React, {PropTypes} from 'react';

// import components
import HashCard from './HashCard';

const HashContainer = ({hashtags, onShowtweets}) => {
    return (
      <div className="hash-container o-grid o-grid--small-full o-grid--medium-full o-grid--large-full o-grid--wrap">
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



          <HashCard tag={hashtags[0].name}
                    tweet_volume={hashtags[0].tweet_volume}
                    image={hashtags[0].image}
                    id={hashtags[0].id}
                    tweetTexts={hashtags[0].tweets}
                    onShow={onShowtweets}/>
*/
