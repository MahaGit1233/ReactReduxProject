import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/redux';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementby2Handler = () => {
    dispatch(counterActions.incrementBy2(2));
  };

  const decremetnby2Handler = () => {
    dispatch(counterActions.decrementBy2(2));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} >Increment</button>
        <button onClick={decrementHandler} >Decrement</button>
      </div>
      <div>
        <button onClick={incrementby2Handler} >Increment by 2</button>
        <button onClick={decremetnby2Handler} >Decrement by 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
