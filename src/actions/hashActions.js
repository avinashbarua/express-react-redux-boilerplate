import axios from 'axios';
import * as types from '../constants/actionTypes';

export function fetchAllHashTagsSuccess(hashtags) {
  return {type: types.FETCH_HASHTAGS_SUCCESS, hashtags};
}

export function toggleHashCardSuccess(hashtags, id) {
  let hashtag = hashtags.filter((tag) => tag.id == id)[0];
  return {type: types.TOGGLE_HASHCARD_SUCCESS, hashtag};
}

export function fetchAllHashTags() {
  //const request = axios.get('http://192.168.1.3:5000/api/fuck');
  //const request = axios.get('http://localhost/api/fuck');
  const request = axios.get('https://raw.githubusercontent.com/geekodour/express-react-redux-boilerplate/master/tools/apiRoutes/hashtagapijsonfile.json');

  return (dispatch) => {
      request.then(({data}) => {
        dispatch(fetchAllHashTagsSuccess(data));
      })
      .catch(function(err) {
        throw(err);
    });
  };
}

