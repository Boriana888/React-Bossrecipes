import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <p>Copyright @ 2023 </p>
      <FontAwesomeIcon icon={faGithub} />
    </div>
  );
}
