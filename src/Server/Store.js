import { configureStore } from "@reduxjs/toolkit";
import counter  from "./featuresOfCounter/counterSlice";
import  calculator  from "./ageCalculateFeature/calculateAgeSlice";
import  tempCalculate  from "./temperatureFeature/tempSlice";

export const store =  configureStore({
    reducer:{
        counter: counter,
        calculator:calculator,
        tempCalculate: tempCalculate
    }
})