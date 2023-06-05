import { TYPE } from "../util/constants";

export const initialState = {
  cart: [],
  wishlist: [],
  products: [],
  categories: [],
  addresses: [
    {
      id: "1",
      name: "Anand Baraik",
      phone: "8969531559",
      city: "Bhubaneswar",
      state: "Odisha",
      pin: "751020",
      addressText: "Bhimatangi road, Kapila Prasad, Pokhariput, Bhubaneswar, Odisha 751020",
    },
  ],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case TYPE.INITIALIZE_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };

    case TYPE.INITIALIZE_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };

    case TYPE.INITIALIZE_CART:
      return {
        ...state,
        cart: [...action.payload],
      };

    case TYPE.INITIALIZE_WISHLIST:
      return {
        ...state,
        wishlist: [...action.payload],
      };

    case TYPE.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case TYPE.CLEAR_WISHLIST:
      return {
        ...state,
        wishlist: [],
      };

    case TYPE.ADD_TO_CART:
      return {
        ...state,
        cart: [...action.payload],
      };

    case TYPE.REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...action.payload],
      };

    case TYPE.UPDATE_QTY_IN_CART:
      return {
        ...state,
        cart: [...action.payload],
      };

    case TYPE.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...action.payload],
      };

    case TYPE.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: [...action.payload],
      };

    case TYPE.ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };

    case TYPE.DELETE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter(({ id }) => id !== action.payload),
      };

    case TYPE.EDIT_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    default:
      return  state;
  }
};