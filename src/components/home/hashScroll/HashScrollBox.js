import React, {PropTypes} from 'react';

// import components
import HashCard from './HashCard';

const HashScrollBox = ({hashtags, onShowtweets}) => {
    return (
      <div id="hash-scroll-box">
        {hashtags.map(hashtag =>
          <HashCard key={hashtag.id}
                    tag={hashtag.hashTag}
                    tweets={hashtag.tweetNo}
                    image={hashtag.image}
                    id={hashtag.id}
                    tweetTexts={hashtag.tweets}
                    onShow={onShowtweets}/>
        )}
      </div>
    );
};


HashScrollBox.propTypes = {
  hashtags: PropTypes.array.isRequired,
  onShowtweets: PropTypes.func.isRequired
};


export default HashScrollBox;
