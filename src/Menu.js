import { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component
{
    render()
    {
        return<div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
        <Link to="index.html" className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
            <h2 className="mb-2 text-white">MyDelivery</h2>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" >Home</Link>&nbsp;&nbsp;
                <Link to="/about" >About</Link>&nbsp;&nbsp;
                <Link to="/service" >Service</Link>&nbsp;&nbsp;
                
                <Link to="/price" >Price</Link>&nbsp;&nbsp;
                <Link to="/teamMember" >TeamMember</Link>&nbsp;&nbsp;
                <Link to="/clientReview" >ClientReview</Link>&nbsp;&nbsp;
                <Link to="/user">Login</Link>&nbsp;&nbsp;
                
            </div>
            <h4 className="m-0 pe-lg-5 d-none d-lg-block"><i className="fa fa-headphones text-primary me-3"></i>+91-7453622783</h4>
        </div>
    </nav>
    </div>
    }
}