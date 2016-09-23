import React from 'react';

// import components
import SearchInput from './SearchInput';
import SearchTags from './SearchTags';

class SearchBox extends React.Component {
  render() {
    return (
      <div className="contentOfSkew" id="search-box">
        <div>
          <SearchTags/>
          search the news
          <SearchInput/>
        </div>
      </div>
    );
  }
}



export default SearchBox;
