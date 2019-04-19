import * as actionTypes from './actionTypes'

export function like(postId) {
  return (dispatch, getState) => {
    const user = getState().profile
    const payload = {
      postId,
      data: {
        id: Math.random().toString(36).substr(2),
        createdAt: Date.now(),
        user: user.id
      }
    }
    console.log('payload:', payload)
    // NOTE: Simulate Slow Network
    setTimeout(() => {
      dispatch({
        type: actionTypes.POST_LIKE,
        payload
      })
    }, 300)
  }
}

export function creatComment(postId, comment) {
  return (dispatch, getState) => {
    const user = getState().profile
    const payload = {
      postId,
      data: {
        id: Math.random().toString(36).substr(2),
        createdAt: Date.now(),
        user: user.id,
        ...comment
      }
    }

    dispatch({
      type: actionTypes.POST_CREATE_COMMENT,
      payload
    })
  }
}
