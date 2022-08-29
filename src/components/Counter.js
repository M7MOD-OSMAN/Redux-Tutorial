import { useDispatch, useSelector } from 'react-redux/es/exports'
import { decAction, incAction, incAction5 } from '../store/actions'

const Counter = () => {
  const redCount = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    incAction(dispatch)
  }
  const handleDecrease = () => {
    decAction(dispatch)
  }
  const handleincrease5 = () => {
    incAction5(dispatch)
  }
  return (
    <div>
      <h1>{redCount}</h1>
      <button onClick={handleIncrease}> Increase </button>
      <button onClick={handleDecrease}> Decrease </button>
      <button onClick={handleincrease5}> Increase by 5 </button>
    </div>
  )
}

export default Counter
