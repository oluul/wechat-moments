import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

function likeHandler(state, action) {
  const { postId, data } = action.payload

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
        ] : state.byId[postId].likeList.filter(obj => obj.user !== data.user)
      }
    }
  }
}

function createComment(state, action) {
  const { postId, data } = action.payload

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
}

function deleteComment(state, action) {
  const { postId, commentId } = action.payload
  const comments = state.byId[postId].comments

  return {
    ...state,
    byId: {
      ...state.byId,
      [postId]: {
        ...state.byId[postId],
        comments: comments.filter(comment => comment.id !== commentId)
      }
    }
  }
}

function postReducers(state = {allIds: []}, action) {
  switch (action.type) {
    case actionTypes.POST_LIKE:
      return likeHandler(state, action)

    case actionTypes.POST_CREATE_COMMENT:
      return createComment(state, action)

    case actionTypes.POST_DELETE_COMMENT:
      return deleteComment(state, action)

    default:
      return state
  }
}

export default combineReducers({
  entities: combineReducers({
    posts: postReducers,
    users: (state = {allIds: []}, action) => {
      return state
    }
  }),
  profile: (state = null, action) => {
		return state
	}
})
