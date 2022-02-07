export const MassageReducer = (state, action) => {
  switch (action.type) {
    case "primary":
      return action.payload;
    case "secondary":
      return action.payload;
    case "error":
      return action.payload;
    case "info":
      return action.payload;
    case "warning":
      return action.payload;
    case "Input":
      return state + action.payload;
    default:
      return state;
  }
};
