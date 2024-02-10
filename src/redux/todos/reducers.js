import {
  Added,
  AllComplete,
  ClearComplete,
  ColorSelect,
  Delete,
  Toggle,
} from "./actionTypes";
import { initialState } from "./initialState";

const nextTodoId = (isTodo) => {
  const maxId = isTodo.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Added:
      return [
        ...state,
        {
          id: nextTodoId(state),
        },
      ];

    case Toggle:
      return state.map((todo) => {
        if (todo.id !== action.type) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case ColorSelect:
      const { todoId, color } = action.payload;

      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          color: color,
        };
      });

    case Delete:
      return state.filter((todo) => todo.id !== action.payload);

    case AllComplete:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case ClearComplete:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default reducer;
