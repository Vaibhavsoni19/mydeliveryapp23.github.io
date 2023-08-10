import { Component } from "react";
import User from "./User";
// import Admin from "./Admin";
import Menu from "./Menu";
import About from "./About";
import Service from "./Service";
import Price from "./Price";
import TeamMember from "./TeamMember";
import ClientReview from "./ClientReview";
import Footer from "./Footer";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin"
// import Home from "./Home";
export default class App extends Component
{
  render()
  {
    return<div>
     {/* <BrowserRouter> */}
       <Menu/> 
       {/* <Carousal/> */}
       
      <Routes>
    {/* <Route path="/home" element={<Home/>}/> */}
    <Route path="/" element={<Home/>}/>
    

    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/price" element={<Price/>}/>
    <Route path="/teamMember" element={<TeamMember/>}/>
    <Route path="/clientReview"element={<ClientReview/>}/> 
    <Route path="/user" element={<User/>}/>
    <Route path="/admin" element={<Admin/>}/>


    {/* <Route path="/footer" element={<Footer/>}/> */}
    </Routes>    
    
    {/* </BrowserRouter> */}
    </div>
  }
  
}