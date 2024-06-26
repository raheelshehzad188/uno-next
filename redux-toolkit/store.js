import { configureStore } from "@reduxjs/toolkit";
import { inputsReducer } from "./reducers/inputsReducer";
import { currencyReducer } from "./reducers/currencyReducer";
import { gridReducer } from "./reducers/gridReducer";

export const store = configureStore({
  reducer: {
    inputsReducer,
    currencyReducer,
    gridReducer,
  },
});
