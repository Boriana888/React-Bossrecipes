import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Header(props) {
  return (
    <header className="header">
      <div className="parts">
        <FontAwesomeIcon
          icon={faBars}
          className="click"
          onClick={props.hamMenuClicked}
        />
        <Link to={"/signIn"} className="signInLink">
          <span className="signInBtn click">
            <FontAwesomeIcon icon={faHeart} />
            Sign In
          </span>
        </Link>
      </div>
      <div className="parts">
        <Link to="/">
          <h1 className="click">
            {window.innerWidth < 600 ? "BossRecipes" : "BossRecipes"}
          </h1>
        </Link>
      </div>
      <div className="parts">
        <span className="followContainer">
          Follow
          <div className="brandsContainer">
            <FontAwesomeIcon icon={faFacebook} className="click" />
            <FontAwesomeIcon icon={faInstagram} className="click" />
            <FontAwesomeIcon icon={faTwitter} className="click" />
          </div>
        </span>
        <span className="searchBtn click" onClick={props.searchClicked}>
          {window.innerWidth < 600 ? "" : "Search"}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
    </header>
  );
}
