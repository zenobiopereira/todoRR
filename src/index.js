import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import todosReducer from "./reducers/index";
import App from "./components/App";
import {loadState, saveState} from './reducers/localStorage.js'
const persistedState =  loadState();
const StoreInstance = createStore(
  todosReducer,
  persistedState
)
StoreInstance.subscribe(()=> {
  saveState(StoreInstance.getState());
})

render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById("index")
);