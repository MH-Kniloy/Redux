
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './features/CounterSlice/CounterSlice';

function App() {
  const count =useSelector((selector)=> selector.counter.value);
  const dispatch = useDispatch()
  const handleIncreament=()=>{
    dispatch(increment())
  }
  const handleDecreament=()=>{
      dispatch(decrement())
  }

  return (
    <>
      <h1>Redux</h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={handleIncreament}
        >
          Increment
        </button>
        <span >{count}</span>
        <button
          aria-label="Decrement value"
          onClick={handleDecreament}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App
