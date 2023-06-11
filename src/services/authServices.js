import { TYPE } from "../util/constants";
import { TOAST_CONFIG } from "../util/constants";
import { toast } from "react-toastify";
export const logoutUser = (setToken, setUser, dataDispatch, filterDispatch, setLoader) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    dataDispatch({ type: TYPE.CLEAR_CART });
    dataDispatch({ type: TYPE.CLEAR_WISHLIST });
    filterDispatch({ type: TYPE.CLEAR_FILTERS });
    setLoader(true);
    setTimeout(() => {
        setLoader(false);
        toast.info(`Logged out`, TOAST_CONFIG);
    }, 400);
};