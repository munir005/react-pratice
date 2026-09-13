import { useDispatch, useSelector } from "react-redux";
import { calculateCTemp, calculateFTemp } from "../../Server/temperatureFeature/tempSlice";

function TempInput() {

    const dispatch = useDispatch()
    const tempC = useSelector((state)=>state.tempCalculate.C)
    const tempF = useSelector((state)=>state.tempCalculate.F)
    
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex items-center w-30 md:w-35 gap-0.5 border px-2 py-1 rounded-lg">
        <label htmlFor="celsius">
          <span>C</span>
        </label>
        <input 
        type="number"
        id="celsius" 
        onChange={(e)=>{
           dispatch(calculateFTemp(e.target.value))
        }}
         value={Number(tempC).toFixed(2)}
         className="border-none outline-none block w-full text-center "
        />
      </div>
      <div className="">⇅</div>
      <div className="flex items-center gap-0.5 border px-2 py-1 rounded-lg w-30 md:w-35">
        <label htmlFor="fahrenheit">
           <span>F°</span>
        </label>
        <input type="number"
         id="fahrenheit"
         value={Number(tempF).toFixed(2)}
         onChange={(e)=>{
            dispatch(calculateCTemp(e.target.value))
         }}
        inputMode="text"
         className="border-none outline-none block w-full md:w-26 text-center "
         />
      </div>
    </div>
  );
}

export default TempInput;
