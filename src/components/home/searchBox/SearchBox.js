import React from 'react';

// import components
import SearchInput from './SearchInput';
import SearchTags from './SearchTags';

class SearchBox extends React.Component {
  render() {
    return (
      <div className="u-center-block" id="search-box">
        <div className="u-center-block__content">
          <SearchTags/>
          <SearchInput/>
        </div>
      </div>
    );
  }
}



export default SearchBox;
