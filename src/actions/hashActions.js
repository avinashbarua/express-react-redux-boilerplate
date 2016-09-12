import axios from 'axios';
import * as types from '../constants/actionTypes';

export function fetchAllHashTagsSuccess(hashtags) {
  return {type: types.FETCH_HASHTAGS_SUCCESS, hashtags};
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
