import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
  decrementByAmount
} from "./redux/counterSlice";

export default function Counter() {
  const [amount, setAmount] = useState("");
  const [decrementAmount,setDecrementAmount]=useState('');
  const dispatch = useDispatch();

  const count = useSelector((state): state => state.counter.count);

  const handleIncrement = () => {
  
    if (amount == "") {
      alert("plz fill the increment amount");
    } else {
      //
      dispatch(incrementByAmount(Number(amount)));
    }
  };


  const handleDecrement = () => {
  
    if (decrementAmount == "") {
      alert("plz fill the decrement amount");
    } else {
      //
      dispatch(decrementByAmount(Number(decrementAmount)));
    }
  };
  return (
    <div className="counter-card">
      <div className="result-field">{count}</div>
      <div className="btn-collection">
        <button
          onClick={() => dispatch(decrement())}
          className="btn decrement "
        >
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className="btn reset">
          reset
        </button>{" "}
        <button
          onClick={() => dispatch(increment())}
          className="btn increment "
        >
          Increment
        </button>{" "}
      </div>
      <div className="increment-add-box">
        <input
          type="text"
          onChange={(e) => setAmount(e.target.value)}
          className="increment-input"
          placeholder="enter the amount to be incremented"
        />
        <button
          className="btnAmount"
          value={amount || ""}
          onClick={() => handleIncrement()}
        >
          increment by Amount
        </button>
      </div>

      <div className="increment-add-box">
        <input
          type="text"
          onChange={(e) => setDecrementAmount(e.target.value)}
          className="increment-input"
          placeholder="enter the amount to be decremented"
        />
        <button
          className="btnAmount"
          value={amount || ""}
          onClick={() => handleDecrement()}
        >
          increment by Amount
        </button>
      </div>
    </div>
  );
}
