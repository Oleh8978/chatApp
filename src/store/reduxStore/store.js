import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

export default createStore(rootReducer);
