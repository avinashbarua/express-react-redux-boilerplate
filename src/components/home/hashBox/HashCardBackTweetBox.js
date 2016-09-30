import React, {PropTypes} from 'react';

const HashCardBackTweetBox = ({user,text}) => {
  return (
    <div>
      <h3>{user}</h3>
      <p>{text}</p>
    </div>
  );
};

HashCardBackTweetBox.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default HashCardBackTweetBox;

