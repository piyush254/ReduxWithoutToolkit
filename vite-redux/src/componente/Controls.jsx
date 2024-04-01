import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const HandleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const HandleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const HandleReset = () => {
    dispatch({ type: "RESET" });
  };
    const Toggle = () => {
    dispatch({ type: "TOGGLE" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
   const handlesubs = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "0";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={HandleIncrement}
          type="button"
          className="btn btn-primary"
        >
          +1
        </button>
        <button
          onClick={HandleDecrement}
          type="button"
          className="btn btn-success"
        >
          -1
        </button>
        <button onClick={HandleReset} type="button" className="btn btn-danger">
          Reset
        </button>
        <button onClick={Toggle} type="button" className="btn btn-info">Toggle</button>
      </div>
      <div className="btndiv">
        <input type="number" id="tentacles" name="tentacles" min="0" max="100" className="inputbyuser" ref={inputElement} />
        <button onClick={handleAdd} className="btn btn-dark btnclicked">
          Add
        </button>
        <button onClick={handlesubs} className="btn btn-warning btnclicked">SUBS</button>
      </div>
    </>
  );
}

export default Controls;
