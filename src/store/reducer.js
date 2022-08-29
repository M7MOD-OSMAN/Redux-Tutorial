import { DECREMENT, INCREMENT, INCREMENT5 } from './types'

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    case INCREMENT5:
      return { ...state, count: state.count + 5 }
    default:
      return state
  }
}

export default reducer
