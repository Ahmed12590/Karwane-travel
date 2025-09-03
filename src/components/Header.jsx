
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link to="/" className="brand">
          <img
            className="brand__logo"
            src={logo}             
            alt="TravelSite logo"
            width="100%"
            height="70"
            decoding="async"
            fetchpriority="high"
          />
          
        </Link>
<nav className="nav">
          <NavLink to="/" end className={({isActive}) => isActive ? "active" : undefined}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "active" : undefined}>About Us</NavLink>
          <NavLink to="/umrah" className={({isActive}) => isActive ? "active" : undefined}>Umrah</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "active" : undefined}>Contact</NavLink>
        </nav>
        
      </div>
    </header>
  );
}
