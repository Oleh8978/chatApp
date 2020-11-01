import { combineReducers } from "redux";
import openReducer from "./openReducer";
import masgAdder from "./msgAdder";
import ChackSender from "./ChackSend";

const rootReducer = combineReducers({
  openReducer,
  masgAdder,
  ChackSender
});
export default rootReducer;
