const STORAGE_BASKETS = JSON.parse(localStorage.getItem('baskets'))

console.log(STORAGE_BASKETS);

const initialState = {
  baskets: STORAGE_BASKETS ?? [],
  user: null,
};

//todo: Calculate Price Items
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//todo: Action process
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        baskets: [...state.baskets, action.item],
      };

    case "REMOVE_FROM_BASKET":
      state.baskets.splice(action.item, 1);
      return {
        ...state,
        baskets: [...state.baskets],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "STORAGE_USER":
      return {
        ...state,
        baskets: action.baskets,
      };

    default:
      return state;
  }
};

export { initialState };
export default reducer;
