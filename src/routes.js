import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CountryPage from './components/country/CountryPage';
import TopicPage from './components/topic/TopicPage';
import HashtagPage from './components/hashtag/HashtagPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="countries" component={CountryPage}/>
    <Route path="hashtags" component={HashtagPage}/>
    <Route path="topics" component={TopicPage}/>
  </Route>
);
