const InitialState = {
  counter: 0
};

export const user = (state = InitialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};
