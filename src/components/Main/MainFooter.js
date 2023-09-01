import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function MainFooter() {
  return (
    <div className="mainFooter">
      <nav className="navCard socialLinks">
        <strong className="click">BossRecipes</strong>
        <ul className="socialsUl">
          <li>
            <FontAwesomeIcon icon={faFacebook} className="click" />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} className="click" />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} className="click" />
          </li>
          <li>
            <FontAwesomeIcon icon={faPinterest} className="click" />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} className="click" />
          </li>
          <li>
            <FontAwesomeIcon icon={faTiktok} className="click" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
