import React, { useState } from "react";
import "./Header.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { State } from "../../Interfaces";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { useMemo } from "react";

function Header() {
  const state = useSelector((state: State) => state.basket.basket);
  const [name, setName] = useState("");
  auth.onAuthStateChanged((user) => {
    setName(user?.displayName || "");
  });
  const SignOuthandler = () => {
    if (auth.currentUser) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/" className="header__link">
        <img
          className="header__logo"
          src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
          alt="a"
        />
      </Link>

      <div className="header__search">
        <Input
          endAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
      <div className="header__nav">
        <Link to="/sign-in" className="header__link">
          <div className="header__option" onClick={SignOuthandler}>
            <span className="header__optionUp">Hello {name}</span>
            {auth.currentUser ? (
              <span className="header__optionDown">Sign out</span>
            ) : (
              <span className="header__optionDown">Sign in</span>
            )}
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionUp">Returns</span>
          <span className="header__optionDown">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionUp">Your</span>
          <span className="header__optionDown">Prime</span>
        </div>
        <div className="header__option header__optionBasket">
          <Link to="/basket" className="header__link">
            <ShoppingBasketIcon></ShoppingBasketIcon>
          </Link>

          <span className="header__optionDown header__BasketCount">
            {state.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
