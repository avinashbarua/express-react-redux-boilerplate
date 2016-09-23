import React from 'react';

// import components
import SearchInput from './SearchInput';
import SearchTags from './SearchTags';

class SearchBox extends React.Component {
  render() {
    return (
      <div id="search-box">
        <div className="contentOfSkew">
          <div>
            <SearchTags/>
            search the news
            <SearchInput/>
            <p>tagline goes here</p>
            <button href="#news-box" className="btn blue">just take me to the news</button>
          </div>
        </div>
      </div>
    );
  }
}



export default SearchBox;

/*
news stripe sample
        <div className="news-stripe">
          I am some more text here okay bro? I am adding some more and more text for the test!
        </div>
*/
