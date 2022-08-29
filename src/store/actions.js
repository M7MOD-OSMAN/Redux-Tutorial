import { DECREMENT, INCREMENT, INCREMENT5 } from './types'

export const incAction = async (dispatch) => {
  return dispatch({
    type: INCREMENT,
  })
}

export const decAction = async (dispatch) => {
  return dispatch({
    type: DECREMENT,
  })
}

export const incAction5 = async (dispatch) => {
  return dispatch({
    type: INCREMENT5,
  })
}
