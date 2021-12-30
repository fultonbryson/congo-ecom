import {} from "../actions/types";

const INITIAL_STATE = {
  categories: [],
  selectedCategoryId: 0,
  selectedProducts: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    // case SET_SHOP_CATEGORIES:
    //   return {
    //     ...state,
    //     categories: action.payload,
    //   };

    default:
      return state;
  }
}
