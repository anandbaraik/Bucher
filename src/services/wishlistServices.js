import axios from "axios";
import { TYPE, TOAST_CONFIG } from "../util/constants";
import { toast } from "react-toastify";

export const addToWishlist = async (
  dataDispatch,
  product,
  token,
  setIsBtnDisabled
) => {
  try {
    setIsBtnDisabled(true);

    const {data:{wishlist}} = await axios.post("/api/user/wishlist", {product},
      {
        headers: {
          authorization: token,
        }
      }
    );

    setIsBtnDisabled(false);

    toast.success("Added To Wishlist", TOAST_CONFIG);

    dataDispatch({
      type: TYPE.ADD_TO_WISHLIST,
      payload: wishlist
    });

  } catch (error) {
    console.error("addToWishlist : Error while adding a book to wishlist", error);
  }
};

export const removeFromWishlist = async (
  dataDispatch,
  productId,
  token,
  setIsBtnDisabled
) => {
  try {
    setIsBtnDisabled(true);

    const {data:{wishlist}} = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {
        authorization: token,
      },
    });

    setIsBtnDisabled(false);

    toast.warn("Removed From Wishlist", TOAST_CONFIG);

    dataDispatch({
      type: TYPE.REMOVE_FROM_WISHLIST,
      payload: wishlist
    });

  } catch (error) {
    console.error("removeFromWishlist : Error while removing a book from wishlist", error);
  }
};