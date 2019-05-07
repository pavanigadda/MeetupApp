import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  /*the third param to createStore is completely optional but we are applying a middleware to 
    1. Enforce store immutability using redux-immutable-state-invariant
    2. Create thunks using redux-thunk as an async library */
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
