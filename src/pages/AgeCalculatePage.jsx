import { useState } from "react";
import SelectDOB from "../components/ageCalculateComponents/SelectDOB";
import SelectYear from "../components/ageCalculateComponents/SelectYear";
import ShowCalculatedAge from "../components/ageCalculateComponents/ShowCalculatedAge";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateAge } from "../Server/ageCalculateFeature/calculateAgeSlice";

function AgeCalculatePage() {
  const todayDate = new Date().toISOString().split("T")[0];
  const [DOBValue, setDOBValue] = useState("2000-01-01");
  const [selectedYearValue, setSelectedYearValue] = useState(todayDate);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateAge({ DOBValue, selectedYearValue }));
  }, [DOBValue, selectedYearValue]);

  return (
    <div className="md:text-2xl mt-4 flex flex-col items-center justify-center gap-4">
      <div className="flex gap-4 flex-wrap w-full justify-center px-3">
        <SelectDOB
          DOBValue={DOBValue}
          setDOBValue={setDOBValue}
          todayDate={todayDate}
        />
        <SelectYear
          DOBValue={DOBValue}
          selectedYearValue={selectedYearValue}
          setSelectedYearValue={setSelectedYearValue}
        />
      </div>
      <ShowCalculatedAge />
    </div>
  );
}

export default AgeCalculatePage;
