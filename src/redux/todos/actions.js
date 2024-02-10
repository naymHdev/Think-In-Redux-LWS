import {
  Added,
  AllComplete,
  ClearComplete,
  ColorSelect,
  Delete,
  Toggle,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: Added,
    payload: todoText,
  };
};

export const todoDelete = (todoDelete) => {
  return {
    type: Delete,
    payload: todoDelete,
  };
};

export const toggle = (todoId) => {
  return {
    type: Toggle,
    payload: todoId,
  };
};

export const colorSelect = (todoId, color) => {
  return {
    type: ColorSelect,
    payload: {
      todoId: todoId,
      color: color,
    },
  };
};

export const allComplete = () => {
  return {
    type: AllComplete,
  };
};

export const clearComplete = () => {
  return {
    type: ClearComplete,
  };
};
