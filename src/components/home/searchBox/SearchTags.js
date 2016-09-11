import React from 'react';
import {Link} from 'react-router';

const SearchTags = () => {
  return (
    <div id="search-tags">
      <p>Get all of the news. here.</p>
      <Link to="/topics">
      <button className="btn btn-3">TOPICS</button>
      </Link>
      <Link to="/countries">
      <button className="btn btn-3">COUNTRIES</button>
      </Link>
      <Link to="/hashtags">
      <button className="btn btn-3">HASHTAGS</button>
      </Link>
    </div>
  );
};

export default SearchTags;
