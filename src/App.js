import {Routes, Route} from "react-router-dom";
import {MockApi} from "./pages/MockApi/MockApi.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/mock-man" element={<MockApi/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
