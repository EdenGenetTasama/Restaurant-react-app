export const MassageReducer = (state, action) => {
  switch (action.type) {
    case "primary":
      return "primary";
    case "secondary":
      return "secondary";
    case "error":
      return "error";
    case "info":
      return "info";
    case "warning":
      return "warning";
    case "Input":
      return state + action.payload;
    default:
      return state;
  }
};
