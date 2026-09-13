import React from 'react'
import { useSelector } from 'react-redux'

function TempShow() {
  const tempC = useSelector((state)=>state.tempCalculate.C)
    const tempF = useSelector((state)=>state.tempCalculate.F)

  return (
    <div>
        {Number(tempC).toFixed(2)} ℃ =  {Number(tempF).toFixed(2)} ℉
    </div>
  )
}

export default TempShow