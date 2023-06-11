import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState, dataReducer } from "../reducer/DataReducer";
import { getCategories, getProducts } from "../services/productAndCategoriesService";

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

  useEffect(() => {
    getCategories(setLoader, dispatch);
    getProducts(setLoader, dispatch);
  }, []);

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