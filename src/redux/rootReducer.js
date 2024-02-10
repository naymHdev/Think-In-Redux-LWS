import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import todoReducer from "./todos/reducers";

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default rootReducer;
