import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

function Nav() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }
console.log(user);
    function showNavigation() {
      if (Auth.loggedIn()) {
        return (
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/orderHistory">Order History</Link>
            </li>
            <li className="mx-1">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="mx-1">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        );
      }
    }

    //if logged in as an admin, go directly to admin page
    function showAdminNavigation() {
      //if auth.login is true, and auth.admin is true, then show admin navigation
      if (Auth.loggedIn() && data.firstName === 'admin') {
        return (
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/admin">Admin</Link>
            </li>
            <li className="mx-1">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        );
      }
    }

    return (
      <header className="flex-row px-1">
        <h1 className="namesize">
          <Link to="/">JENNA LOUISE ART</Link>
        </h1>

        <nav>
          {showNavigation()}
          {showAdminNavigation()}
        </nav>
      </header>
    );
  }


export default Nav;









