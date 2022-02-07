


export const MassageReducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return "Success"
    default:
      return state;
  }
};


