import React from 'react';
import {Link} from 'react-router';

const SearchTags = () => {
  return (
    <div id="search-tags">
      <Link to="/countries">COUNTRIES</Link>
      <Link to="/hashtags">#HASHTAGS</Link>
      <Link to="/topics">TOPICS</Link>
    </div>
  );
};

export default SearchTags;


/*
      <Link to="/topics">
      <button className="btn btn-3">TOPICS</button>
      </Link>
      <Link to="/countries">
      <button className="btn btn-3">COUNTRIES</button>
      </Link>
      <Link to="/hashtags">
      <button className="btn btn-3">HASHTAGS</button>
      </Link>




      <div className="o-grid o-grid--small-full o-grid--medium-fit o-grid--large-full">
        <div className="o-grid__cell">first</div>
        <div className="o-grid__cell">second</div>
        <div className="o-grid__cell">third</div>
      </div>
*/
