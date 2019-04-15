import { combineReducers } from 'redux'

export default combineReducers({
  posts: (state = [], action) => {
    switch (action.type) {
			default:
				return state
		}
  },
  profile: (state = null, action) => {
		return state
	}
})
