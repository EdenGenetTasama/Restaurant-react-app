

export const NameReducer = (state, action) => {
  switch (action.type) {
    case "Eden":
      return "Eden's Profile"+" "+ action.payload;
    case "Daniel":
      return "Daniel's Profile";
    case "Yafit":
      return "Yafit's Profile";
    default:
      return state;
  }
};
