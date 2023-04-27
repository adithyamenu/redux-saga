import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../store/actions/counter.actions";
import { countSelector } from "../store/selectors/counter.selector";

export default function Home() {
  const count = useSelector(countSelector);

  const dispatch = useDispatch();
  return (
    <div style={{ margin: 100 }}>
      <div>Count is {count}</div>
      <div>
        <button
          style={{ height: 100, width: 200, marginTop: 100 }}
          onClick={() => dispatch(incrementAction())}
        >
          increment
        </button>
      </div>
      <div>
        <button
          style={{ height: 100, width: 200, marginTop: 100 }}
          onClick={() => dispatch(decrementAction())}
        >
          decrement
        </button>
      </div>
    </div>
  );
}
