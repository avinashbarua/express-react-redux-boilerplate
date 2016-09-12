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
  const request = axios.get('http://localhost:5000/api/fuck');
  return (dispatch) => {
      request.then(({data}) => {
        dispatch(fetchAllHashTagsSuccess(data));
      })
      .catch(function(err) {
        throw(err);
    });
  };
}

