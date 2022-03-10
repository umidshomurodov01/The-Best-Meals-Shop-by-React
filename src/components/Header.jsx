import {Link} from 'react-router-dom'
export default function Header(){

  return(
    <nav className="#26a69a teal lighten-1">
    <div className="nav-wrapper ">
      <Link to="/" className="brand-logo">Best the Meals</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
  )
}