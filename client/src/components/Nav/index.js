import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function showNavigation() {

  if (Auth.loggedIn()) {
    return (
      <ul className="flex-row">
      {Auth.ifAdmin() ? 
      <li className="mx-1">
      <Link to="/admin">
        Admin
      </Link>
    </li>: ''
      }
        <li className="mx-1">
          <Link to="/orderHistory">
            Order History
          </Link>
        </li>

        <li className="mx-1">
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </li>
      </ul>
    )
  } else {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/">
            ART
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/signup">
            APPAREL
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/login">
            CUSTOM SKATE DECKS
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/">
            HOME
          </Link>
        </li>
      </ul>
    );
  }
}


function Nav() {

  

  return (
    <header className="flex-row px-1">
      <h1 className="namesize">
        <Link to="/">
          JENNA LOUISE ART
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
