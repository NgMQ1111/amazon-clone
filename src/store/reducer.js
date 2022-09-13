const initialState = {
  baskets: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        baskets: [...state.baskets, action.item],
      };

    case "REMOVE_FROM_BASKET":
      state.baskets.splice(action.item, 1)
      return {
        ...state,
        baskets: [...state.baskets],
      };
    default:
      return state;
  }
};

export { initialState };
export default reducer;
