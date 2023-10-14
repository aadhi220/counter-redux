import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,reset } from "./redux/counterSlice";

export default function Counter() {

const dispatch=useDispatch()

const count = useSelector((state):(state)=>state.counter.count)


  return (
    <div className="counter-card">
      <div className="result-field">{count}</div>
      <div className="btn-collection">
        <button onClick={()=>dispatch(decrement())} className="btn decrement ">Decrement</button>
        <button onClick={()=>dispatch(reset())} className="btn reset">reset</button>{" "}
        <button onClick={()=>dispatch(increment())} className="btn increment ">Increment</button>{" "}
      </div>
    </div>
  );
}
