export const decrement = () => {
  return { type: "DECREMENT" };
};
export const increment = () => {
  return { type: "INCREMENT" };
};

export const incrementAsync = () => {
  return (dispatch, getState) => {
    const { counter } = getState();
    setTimeout(() => dispatch(increment()), 2000);
  };
};
