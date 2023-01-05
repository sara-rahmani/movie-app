import { NavLink } from "react-router-dom";

import "../styles/main-nav.css";
const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";

const Nav = () => {
  function handleBlurOnClick(e) {
    e.target.blur();
  }
  return (
    <nav className="main-nav" onClick={handleBlurOnClick}>

      <nav className="main-nav" onClick={handleBlurOnClick}></nav>
     

      <ul>
      <li>
          <NavLink to="/"> <img className="logo" src={`${imageFolderPath}movie-app-logo.jpg`} alt="logo-movie-app"></img>
</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/favs">Favourites</NavLink>
        </li>
        <li>
          <NavLink to="/watchLater">Watch Later</NavLink>
        </li>
      
      </ul>
    </nav>
  );
};

export default Nav;
