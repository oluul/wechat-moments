import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

export default combineReducers({
  posts: (state = [], action) => {
    switch (action.type) {
      case actionTypes.POST_LIKE:
        return state.map(_post => {
          var post
          if (_post.id === action.payload.id) {
            post = Object.assign({}, _post)

            post.liked = !post.liked
            post.likeList = post.likeList || []

            if (!_post.liked) {
              post.likeList.push(action.payload.data)
            } else {
              post.likeList = post.likeList.filter(obj => obj.user.id !== action.payload.data.user.id)
            }
          }

          return post || _post
        })

			default:
				return state
		}
  },
  profile: (state = null, action) => {
		return state
	}
})
