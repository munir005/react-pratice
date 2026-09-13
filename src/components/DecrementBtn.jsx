import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementBy1 } from '../Server/featuresOfCounter/counterSlice'

function DecrementBtn() {

  const dispatch = useDispatch()

  return (
    <div>
        <button
        onClick={()=>{
          dispatch(decrementBy1())
        }} 
        className='py-3 px-4 rounded-2xl bg-emerald-900 cursor-pointer active:scale-97 font-semibold text-2xl'>Decrease by 1</button>
    </div>
  )
}

export default DecrementBtn