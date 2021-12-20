
import './header.scss';
import { NavLink } from "react-router-dom";

function Header() {
    return <header className='header'>
   <div className="header__inner">
       <div className="header__logo">
           <a href="/">Logo</a>
       </div>
       <nav className='header__nav'>
  <ul className="header__menu">
      <li>
          <NavLink to='/' >Home</NavLink>
      </li>
      <li>
          <NavLink to="/about">About</NavLink>
      </li>
      <li>
          <NavLink to="/contacts">Contacts</NavLink>
      </li>
  </ul>
   </nav>
   </div>
    </header>
}


export default Header;
