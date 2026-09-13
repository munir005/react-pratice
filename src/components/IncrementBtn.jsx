import React from "react";
import { incrementBy1 } from "../Server/featuresOfCounter/counterSlice";
import { useDispatch } from "react-redux";

function IncrementBtn() {

  const dispatch =  useDispatch()

  return (
    <div>
      <button 
      onClick={()=>{
        dispatch(incrementBy1())
      }}
       className="py-3 px-4 rounded-2xl bg-emerald-900 cursor-pointer active:scale-97 font-semibold text-2xl"
      >
      Increase by 1
      </button>
    </div>
  );
}

export default IncrementBtn;
