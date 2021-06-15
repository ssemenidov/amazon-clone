import React from "react";
import "./Header.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
        alt="a"
      />
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
        <div className="header__option">
          <span className="header__optionUp">Hello</span>
          <span className="header__optionDown">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionUp">Returns</span>
          <span className="header__optionDown">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionUp">Your</span>
          <span className="header__optionDown">Prime</span>
        </div>
        <div className="header__option header__optionBasket">
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <span className="header__optionDown header__BasketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
