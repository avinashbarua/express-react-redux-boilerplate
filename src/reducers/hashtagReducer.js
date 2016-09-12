import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

const hashtagReducer = (state, action) => {
  switch(action.type) {
    case types.TOGGLE_HASHCARD_SUCCESS:
      if(state.id !== action.hashtag.id) {
        return state;
      }
      return {
        ...state,
        toggle: !state.toggle
      };
    default:
      return state;
  }
};


export default function hashtagsReducer(state = initialState.hashtags, action) {
  switch(action.type) {
    case types.FETCH_HASHTAGS_SUCCESS:
      return action.hashtags;
    case types.TOGGLE_HASHCARD_SUCCESS:
      return state.map(tag => hashtagReducer(tag, action));
    default:
      return state;
  }
}
