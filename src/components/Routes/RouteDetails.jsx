import { Route, Routes } from 'react-router-dom';
import Home from "../../pages/Home/Home";
import {MockApi} from "../../pages/MockApi/MockApi";
import BookList from '../../pages/BookList/BookList';
import BookDetails from '../../pages/BookDetails/BookDetails';
import {WishList} from "../../pages/WishList/WishList"
import Cart from "../../pages/Cart/Cart";
import Profile from "../../pages/Profile/Profile";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Address from '../../pages/Address/Address';
import { Checkout } from '../../pages/Checkout/Checkout';
const RouteDetails = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<BookList/>}/>
        <Route path="/books/:bookId/:bookName" element={<BookDetails/>}/>
        <Route path="/wishlist" element={
          <PrivateRoute>
            <WishList/>
          </PrivateRoute>
        }/>
        <Route path="/cart" element={
          <PrivateRoute>
            <Cart/>
          </PrivateRoute>
        }/>
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        }/>

        <Route path="/address" element={
          <PrivateRoute>
            <Address/>
          </PrivateRoute>
        }/>
        <Route path="/checkout" element={
          <PrivateRoute>
            <Checkout/>
          </PrivateRoute>
        }/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/mock-man" element={<MockApi/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>

  )
}

export default RouteDetails;