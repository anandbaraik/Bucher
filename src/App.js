import "./App.css";
import {Routes, Route} from "react-router-dom";
import {MockApi} from "./pages/MockApi/MockApi.jsx"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock-man" element={<MockApi/>}/>
      </Routes>
    </div>
  );
}

export default App;
