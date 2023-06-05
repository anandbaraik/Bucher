import axios from "axios";

export const getProduct = async (productId, setProduct, setLoader) => {
  try {
    setLoader(true);
    const {data:{product}} = await axios.get(`/api/products/${productId}`);
    setLoader(false);
    setProduct(product);
  } catch (error) {
    console.error("getProduct : Error while fetching a book details", error);
  }
};