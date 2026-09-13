import { useState } from "react";
import CountShow from "../components/CountShow";
import IncrementBtn from "../components/IncrementBtn";
import DecrementBtn from "../components/DecrementBtn";
import IncByNum from "../components/IncByNum";
import NumInput from "../components/NumInput";
import RestBtn from "../components/RestBtn";

function HomePage() {
  const [inputVal, setInputVal] = useState(1);
  return (
    <div className="mt-10  flex items-center justify-center gap-4 flex-col">
      <CountShow />
      <div className="flex items-center gap-2 flex-col md:flex-row">
        <IncrementBtn />
        <DecrementBtn />
      </div>
      <div className="px-2 py-1 rounded-2xl bg-emerald-800 cursor-pointer  font-semibold text-2xl flex  gap-2 items-center justify-center">
        <IncByNum inputVal={inputVal} />
        <NumInput inputVal={inputVal} setInputVal={setInputVal} />
      </div>
      <RestBtn />
    </div>
  );
}

export default HomePage;
