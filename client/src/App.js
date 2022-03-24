import ServiceDetection from "./Components/ServiceDetection/ServiceDetection";
import InitMap from "./Components/InitMap/InitMap";
import Home from "./Components/Home/Home";

import {
  BrowserRouter as Router,
  Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
     <Routes>
        <Route path='/' element={<><Home/><ServiceDetection/></>} />
        <Route path='/initmap' element={<InitMap/>} />
      </Routes>
    </Router>
    </div>
  );
}
 
export default App;
