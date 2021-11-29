import React from "react";
import ReactDOM from "react-dom";
import MyMap from "./map";
import Login from './login';
import Restaurant from './restaurants';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
    return (
    <Router>
      <div>
        <hr />
        <Routes>
          <Route exact path="/" element={<Login/>}/>
		  <Route exact path="/login" element={<Login/>}/>
          <Route path="/map" element={<MyMap/>}/>     
          <Route path="/restaurant/:lat/:lng/" element={<Restaurant/>}/>  
        </Routes>
      </div>
    </Router>
  );
}
export default App;