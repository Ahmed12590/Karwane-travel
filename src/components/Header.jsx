import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link className="logo" to="/">Travel<span>Site</span></Link>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
