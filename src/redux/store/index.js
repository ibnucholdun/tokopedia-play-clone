import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import videoReducers from "./../reducers/videoReducers";

const allReducer = combineReducers({
  video: videoReducers,
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
