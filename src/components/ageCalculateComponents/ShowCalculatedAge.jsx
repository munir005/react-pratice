import { useSelector } from "react-redux";

function ShowCalculatedAge() {
  

  const age = useSelector(state => state.calculator.value) || "0 Years, 0 Months, 0 Days" ;
  
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <span className="text-gray-100">Your Age is</span>
      <h2 className="font-bold text-2xl text-green-700">{age}</h2>
    </div>
  );
}

export default ShowCalculatedAge;
