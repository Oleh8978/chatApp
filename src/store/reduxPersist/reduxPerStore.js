import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import store from "./../reduxStore/store";
import openReducer from "./../reduxStore/openReducer";
import masgAdder from "./../reduxStore/msgAdder";
import ChackSender from "./../reduxStore/ChackSend";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  openReducer,
  masgAdder,
  ChackSender
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["openReducer", "masgAdder", "ChackSender"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
