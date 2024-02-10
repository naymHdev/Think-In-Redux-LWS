import { ColorChanged, StatusChanged } from "./actions";

export const colorChanged = (color, changeType) => {
  return {
    type: ColorChanged,
    payload: {
      color: color,
      changeType: changeType,
    },
  };
};

export const statusChanged = (status) => {
  return {
    type: StatusChanged,
    payload: status,
  };
};
