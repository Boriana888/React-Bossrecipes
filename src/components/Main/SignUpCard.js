import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function SignUpCard() {
  const [newsLetterContentShowing, setNewsLetterContentShowing] =
    useState(false);
  const [singUpDone, setSingUpDone] = useState(false);

  const inputClicked = () => {
    setNewsLetterContentShowing(true);
  };

  const signUpClicked = (e) => {
    e.preventDefault();
    setSingUpDone(true);
    console.log(e.target.email.value);
  };

  return (
    <div className="signUpCard">
      <div className="emailNewsCard">
        <div className="emailCard">
          <h3>Get our latest recipes and expert tips right in your inbox</h3>
          <form style={{ height: "2.5rem" }} onSubmit={signUpClicked}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
              onClick={inputClicked}
              required
            />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
        {newsLetterContentShowing && (
          <div className="newsLetterContent">
            <div className="newsLetter">
              <span className="newsLetterTitle">
                <FontAwesomeIcon icon={faCircleCheck} />
                THE TOP TEN
              </span>
              <span className="newsLetterDesc">
                Become a better cook instantly with this weekly report of our
                ten most helpful tips, tricks, and kitchen secrets. Don't miss
                it!
              </span>
            </div>
            <div className="newsLetter">
              <span className="newsLetterTitle">
                <FontAwesomeIcon icon={faCircleCheck} />
                COOK THIS NOW
              </span>
              <span className="newsLetterDesc">
                Love recipes, but hate searching? We do the work for you. You'll
                get our favorite seasonal recipe plus collections of our
                exclusive editors' picks.
              </span>
            </div>
            <div className="newsLetter">
              <span className="newsLetterTitle">
                <FontAwesomeIcon icon={faCircleCheck} />
                TRENDING RECIPES
              </span>
              <span className="newsLetterDesc">
                Get a daily does of the hottest recipes from Epicurious, Bon
                Appétit, and other great sites.
              </span>
            </div>
          </div>
        )}
      </div>
      {singUpDone && (
        <div className="signUpDone">
          <h2>Thanks for subscribing. Your inbox just got 42% more awesome.</h2>
        </div>
      )}
    </div>
  );
}
