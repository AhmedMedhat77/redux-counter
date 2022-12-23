import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/counter/Counter";
import {
  decrementAction,
  incrementAction,
  incrementByValue,
} from "../redux/actions/counterActions/counterActions";

function App() {
  const { count } = useSelector((initialState) => initialState.counter);
  console.log(count);
  const dispatch = useDispatch();

  const onIncrement = () => {
    incrementAction(dispatch);
  };
  const onDecrement = () => {
    decrementAction(dispatch);
  };
  const onIncrementByValue = (val) => {
    incrementByValue(dispatch, val);
  };
  return (
    <div className="App">
      <Counter
        counter={count}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        onIncrementByValue={() => onIncrementByValue(2)}
      />
    </div>
  );
}

export default App;
