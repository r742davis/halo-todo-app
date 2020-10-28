import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import todos from "./reducers/todos";

const reducer = combineReducers({
  todos
});

let store;
const initialState = {};
const middleware = [thunk];

if (process.env.NODE_ENV === "production") {
  store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
} else {
  store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

export default store;