function SelectYear({ DOBValue, selectedYearValue, setSelectedYearValue }) {
  return (
    <div>
      <label htmlFor="select-year" className="block">
        Age at the Date of
      </label>
      <input
        min={DOBValue}
        value={selectedYearValue}
        onChange={(e) => {
          setSelectedYearValue(e.target.value);
        }}
        type="date"
        id="select-year"
        className="rounded-md px-2 py-0.5 bg-gray-800 mt-1.5"
      />
    </div>
  );
}

export default SelectYear;
