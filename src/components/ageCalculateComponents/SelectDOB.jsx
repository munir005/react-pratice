
function SelectDOB({DOBValue, setDOBValue, todayDate}) {
  return (
    <div>
      <label htmlFor="DOB" className="block">
        Date of Birth
      </label>
      <input
        value={DOBValue}
        onChange={(e) => {
          setDOBValue(e.target.value);
        }}
        type="date"
        id="DOB"
        max={todayDate}
        className=" rounded-md px-2 py-0.5 bg-gray-800 mt-1.5"
      />
    </div>
  );
}

export default SelectDOB;
