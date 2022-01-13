import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex-col">
      <div className="top-title">
        <h2>#WhatsOnYourMind</h2>
      </div>

      <ul className="menus">
        <li>
          <Link to="/">
            <span>
              <i class="fa fa-home"></i>
            </span>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <p>Search</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>
              <i class="far fa-plus-square"></i>
            </span>
            <p>Post Something</p>
          </Link>
        </li>

        <li>
          <Link to="/">
            <span>
              <i class="far fa-bell"></i>
            </span>
            <p>notification</p>
          </Link>
        </li>
        <li>
          <Link to="/sign-up">
            <span>
              <i class="far fa-user"></i>
            </span>
            <p>Profile</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>
              <i class="fas fa-cog"></i>
            </span>
            <p>Setting</p>
          </Link>
        </li>
      </ul>

      <div className="bottom-title">
        <span>
          <i class="fas fa-hand-middle-finger"></i>
        </span>
        <p>Made With Hate For Other People</p>
      </div>
    </div>
  );
}

export default Nav;
