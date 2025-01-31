import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const incrementHandler=()=>{
    dispatch({type: 'increment'});
  };

  const decrementHandler=()=>{
    dispatch({type: 'decrement'});
  };

  const incrementby5Handler=()=>{
    dispatch({type: 'incrementby5'});
  };

  const decremetnby5Handler=()=>{
    dispatch({type: 'decrementby5'});
  };

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler} >Increment</button>
        <button onClick={decrementHandler} >Decrement</button>
      </div>
      <div>
        <button onClick={incrementby5Handler} >Increment by 5</button>
        <button onClick={decremetnby5Handler} >Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
