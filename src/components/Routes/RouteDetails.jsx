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
const RouteDetails = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<BookList/>}/>
        <Route path="/books/:bookId/:bookName" element={<BookDetails/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/mock-man" element={<MockApi/>}/>
    </Routes>

  )
}

export default RouteDetails;