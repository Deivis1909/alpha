import {NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        {/*<Link to="/">home</Link>*/}
        {/* Navlink o link com navbar de navegacao */}
        <NavLink to="/">home</NavLink>
        <NavLink to="/About">sobre</NavLink>
        <NavLink to="/nada">nada</NavLink>
    </nav>
  )
};

export default Navbar;