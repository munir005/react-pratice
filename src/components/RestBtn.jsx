import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../Server/featuresOfCounter/counterSlice";

function RestBtn() {
  const dispatch = useDispatch()
  return (
    <div>
      <button 
      onClick={()=>{
        dispatch(reset())
      }}
      className="py-3 px-4 rounded-2xl bg-red-900 cursor-pointer active:scale-97 font-semibold text-2xl">
        Reset
      </button>
    </div>
  );
}

export default RestBtn;
