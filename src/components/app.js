import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Aboutus from "./services/Aboutus";
import Contact from "./services/Contact";
import Home from "./services/Home";
import Services from "./services/Services";


const App = () => {
  return (
    <div>
   <BrowserRouter >
   <Navbar />
    <Route path= "/"  exact >
      <Home/>
    </Route>
    <Route path= "/services"  exact >
      <Services/>
    </Route>
    <Route path= "/Aboutus"  exact >
      <Aboutus/>
    </Route>
    <Route path= "/Contact"  exact >
      <Contact/>
    </Route>
     
   </BrowserRouter>
    </div>
  );
};

export default App;
