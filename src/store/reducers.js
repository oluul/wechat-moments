import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

function userReducers(state = {allIds: []}, action) {
  return state
}

function postReducers(state = {allIds: []}, action) {
  switch (action.type) {
    case actionTypes.POST_LIKE:
      var { postId, data } = action.payload

      return {
        ...state,
        byId: {
          ...state.byId,
          [postId]: {
            ...state.byId[postId],
            liked: !state.byId[postId].liked,
            likeList: !state.byId[postId].liked ? [
              ...state.byId[postId].likeList,
              data
            ] : state.byId[postId].likeList.filter(obj => obj.user.id !== data.user.id)
          }
        }
      }

    case actionTypes.POST_CREATE_COMMENT:
      var { postId, data } = action.payload

      return {
        ...state,
        byId: {
          ...state.byId,
          [postId]: {
            ...state.byId[postId],
            comments: (state.byId[postId].comments || []).concat(data)
          }
        }
      }

    default:
      return state
  }
}

export default combineReducers({
  entities: combineReducers({
    posts: postReducers,
    users: userReducers
  }),
  profile: (state = null, action) => {
		return state
	}
})
