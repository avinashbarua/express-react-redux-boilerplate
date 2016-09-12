import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function hashtagReducer(state = initialState.hashtags, action) {
  switch(action.type) {
    case types.FETCH_HASHTAGS_SUCCESS:
      return action.hashtags;
    default:
      return state;
  }
}
