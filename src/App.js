import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import RouteDetails from "./components/Routes/RouteDetails.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useData } from "./context/DataContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation } from "react-router-dom";
function App() {
	const { loader } = useData();
  const {pathname} = useLocation();
  return (
    <div className="App">
      <Navbar/>
      <RouteDetails/>
      {
        pathname === '/' && (<Footer/>)
      }
      <ToastContainer className="toast-container"/>
      {loader && (
        <Backdrop
          sx={{ color: "#007bb5", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
}

export default App;
