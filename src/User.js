import { Component } from "react";
import { Link } from "react-router-dom";
// import Admin from "./Admin";
import "./User.css"
import Home from "./Menu";
export default class User extends Component
{
    render()
    {
        return <div>
            
<Link rel="stylesheet" to="/User.css" />
<div class="loginBox"> 
    <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px"/>
    <h3>Sign in here</h3>
    <form>
        <div class="inputBox"> <input id="uname" type="text" name="Username" placeholder="Username"/>
            <input id="pass" type="password" name="Password" placeholder="Password"/>
        </div>
       <Link to="/home"><input type="submit" name="" value="Login"/></Link> 
    </form>
    
    <Link to="/admin">Admin Panel</Link>
    <a href="#">Coustmer Panel </a>

    <a href="#">Forget Password<br/> </a>
    <div class="text-center">
        <p style={{color: '#59238F'}}>Sign-Up</p>
    </div>

</div>
        </div>
    }
}