import axios from "axios";
import { TYPE } from "../util/constants";

export const getCategories = async (setLoader, dispatch) => {
  try {
    setLoader(true);
    const {data:{categories}} = await axios.get("/api/categories");
    setLoader(false);

    dispatch({
      type: TYPE.INITIALIZE_CATEGORIES,
      payload: categories,
    });
  } catch (error) {
    console.error("getCategories : Error in fetching categories", error);
  }
};

export const getProducts = async (setLoader, dispatch) => {
  try {
    setLoader(true);
    const {data:{products}} = await axios.get("/api/products");
    setLoader(false);

    dispatch({
      type: TYPE.INITIALIZE_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    console.error("getProducts : Error in fetching products", error);
  }
};