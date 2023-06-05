import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState, dataReducer } from "../reducer/DataReducer";
import { useAuth } from "./AuthContext";
import { getCategories, getProducts } from "../services/productAndCategoriesService";
import { TYPE } from "../util/constants";

const DataContext = createContext({
  cart: [],
  wishlist: [],
  categories: [],
  products: [],
  addresses: [],
  loader: false,
  dataDispatch: () => {},
  setLoader: () => {}
});

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [loader, setLoader] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    getCategories(setLoader, dispatch);
    getProducts(setLoader, dispatch);
  }, []);

  //set user's cart & wishlist data
  // useEffect(() => {
  //   if (user) {
  //     dispatch({ type: TYPE.ADD_TO_CART, payload: user.cart });
  //     dispatch({ type: TYPE.ADD_TO_WISHLIST, payload: user.wishlist });
  //   }
  // }, [user]);

  return (
    <DataContext.Provider
      value={{
        cart: state.cart,
        wishlist: state.wishlist,
        categories: state.categories,
        products: state.products,
        addresses: state.addresses,
        dataDispatch: dispatch,
        loader,
        setLoader,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
export default DataProvider;