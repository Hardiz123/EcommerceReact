import ShopActionsTypes from "./shop.types";
const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ShopActionsTypes.FECTH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,

      }
    case ShopActionsTypes.FECTH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      }
    case ShopActionsTypes.FECTH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
};

export default shopReducer;