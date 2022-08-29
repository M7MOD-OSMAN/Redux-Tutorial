import { useDispatch, useSelector } from 'react-redux/es/exports'
import { decrement, increment, increment5 } from '../store/counterSlice'

const Counter = () => {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(increment())
  }
  const handleDecrease = () => {
    dispatch(decrement())
  }
  const handleincrease5 = () => {
    dispatch(increment5())
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}> Increase </button>
      <button onClick={handleDecrease}> Decrease </button>
      <button onClick={handleincrease5}> Increase by 5 </button>
    </div>
  )
}

export default Counter
