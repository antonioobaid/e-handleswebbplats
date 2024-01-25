import {  NavLink } from "react-router-dom"

export const Header = () => {
  
  
    return (
    <div className="Header-delen">
    <div className="Container-header">
        <NavLink to="/" className="logo" > <p > bmerketo</p> </NavLink>
        <nav className="main-navigation">
            <NavLink to="/" className="nav-links" >HOME</NavLink>
            <NavLink to="/Productdetails" className="nav-links" >PRODUCTS</NavLink>
            <NavLink to="/Contacts" className="nav-links">CONTACT</NavLink>
        </nav>
        <div className="login-header">
           <i  className="fa-solid fa-magnifying-glass"></i>
           <input type="text" className="search-input" />
            <NavLink to="/Loginform" className="login-klick" > Login </NavLink>
            {/* <input className="login-search" type="text" placeholder="Login" /> */}
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    </div>   
    </div>
  )
}