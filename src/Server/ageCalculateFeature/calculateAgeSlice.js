import { createSlice } from "@reduxjs/toolkit";

export const calculator = createSlice({
  name: "calculator",
  initialState: {
    value: "",
  },
  reducers: {
    calculateAge: (state, actions) => {
      const { DOBValue, selectedYearValue } = actions.payload;

      const birth = new Date(DOBValue);
      const AgeDate = new Date(selectedYearValue);
      let years = AgeDate.getFullYear() - birth.getFullYear();
      let months = AgeDate.getMonth() - birth.getMonth();
      let days = AgeDate.getDate() - birth.getDate();
        
      if (AgeDate < birth ) {
        state.value = "Invalid Date";
      } else {
        if (days < 0) {
          months--;
          // Get the total days in the previous month
          const previousMonth = new Date(
            AgeDate.getFullYear(),
            AgeDate.getMonth(),
            0,
          );
          days += previousMonth.getDate();
        }
        if (months < 0) {
          years--;
          months += 12;
        }
        state.value = `${years}Years, ${months} Months, ${days} Days`;
      }
    },
  },
});

export const { calculateAge } = calculator.actions;
export default calculator.reducer;
