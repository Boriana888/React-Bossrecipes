import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchPopup from "./components/SearchPopup";

import Searched from "./components/Searched";
import SignIn from "./components/SignIn";
import Food from "./components/Food";

function App() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const searchClicked = () => {
    setIsSearchActive((prevState) => !prevState);
  };

  const searchCancelled = () => {
    setIsSearchActive((prevState) => !prevState);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchPopup
                  isSearchActive={isSearchActive}
                  searchCancelled={searchCancelled}
                />
                <Header searchClicked={searchClicked} />

                <Main searchClicked={searchClicked} />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route
            path="/search/:searchedItem"
            element={
              <>
                <SearchPopup
                  isSearchActive={isSearchActive}
                  searchCancelled={searchCancelled}
                />
                <Header searchClicked={searchClicked} />

                <Searched />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/recipes/:id"
            element={
              <>
                <SearchPopup
                  isSearchActive={isSearchActive}
                  searchCancelled={searchCancelled}
                />
                <Header searchClicked={searchClicked} />

                <Food />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
