import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter"; // import the actions
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch(); // a function that will dispatch a action against our redux store

  // redux will automatic create a subscription for this component
  //const counter = useSelector((state) => state.counter); // fuction retrieve the store data and extract
  const counter = useSelector((state) => state.counter.counter);
  //const showCounter = useSelector((state) => state.showCounter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment()); // dispatch with action
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // dispatch with action payload (Custom data)
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
