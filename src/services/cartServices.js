import axios from "axios";
import { TYPE, TOAST_CONFIG } from "../util/constants";
import { toast } from "react-toastify";
export const addToCart = async (
  dataDispatch,
  product,
  token,
  setIsBtnDisabled
) => {
  try {
    setIsBtnDisabled(true);

    const {data:{cart}} = await axios.post("/api/user/cart",{product},
      {
        headers: {
          authorization: token,
        }
      }
    );

    setIsBtnDisabled(false);

    toast.success("Added To Cart", TOAST_CONFIG);

    dataDispatch({ type: TYPE.ADD_TO_CART, payload: cart });

  } catch (error) {
    console.error("addToCart : Error while adding book in cart", error);
  }
};

export const removeFromCart = async (
  dataDispatch,
  productId,
  token,
  setIsBtnDisabled,
  isClearing
) => {
  try {
    setIsBtnDisabled(true);

    const {data:{cart}} = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      }
    });

    setIsBtnDisabled(false);

    if (!isClearing) {
      toast.warn("Removed From Cart", TOAST_CONFIG);
    }

    dataDispatch({ type: TYPE.REMOVE_FROM_CART, payload: cart });

  } catch (error) {
    console.error("removeFromCart : Error while removing book from cart", error);
  }
};

export const updateQtyInCart = async (
  dataDispatch,
  productId,
  token,
  actionType,
  setIsBtnDisabled
) => {
  try {
    setIsBtnDisabled(true);

    const {data:{cart}} = await axios.post(`/api/user/cart/${productId}`, {
        action: {
          type: actionType === "INCREMENT" ? "increment" : "decrement",
        }
      },
      {
        headers: {
          authorization: token,
        }
      }
    );

    setIsBtnDisabled(false);

    dataDispatch({
      type: TYPE.UPDATE_QTY_IN_CART,
      payload: cart
    });

    if(actionType === "INCREMENT") {
      toast.info("Quantity incremented", TOAST_CONFIG);
    } else {
      toast.info("Quantity decremented", TOAST_CONFIG);
    }
  } catch (error) {
    console.error("updateQtyInCart : Error while updating book qty in cart", error);
  }
};