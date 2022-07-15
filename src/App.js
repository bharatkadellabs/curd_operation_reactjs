import React from "react";
import Header from "./shareFiles/header.jsx";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp.js";
import SignIn from './pages/SignIn';
import AddProduct from './pages/products/Add.jsx';
const App = () => {
  return (
    <div>
      <Header />  
        <Routes>          
          <Route exact  path="/" element ={<Home />} />
          <Route exact  path="/SignIn" element ={<SignIn/>} />
          <Route exact path="/SignUp" element ={<SignUp />} />
          <Route exact path="/addProduct" element ={<AddProduct/>} />
        </Routes>       
    </div>
  );
};

export default App;
