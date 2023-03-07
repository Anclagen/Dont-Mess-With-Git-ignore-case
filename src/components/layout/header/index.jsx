import React, {useState} from "react";
import {Link} from "react-router-dom";
import { HeaderStyles, Navigation, NavLinks, MainLinksContainer, MenuIcon, CartIcon, CartImage } from "./styles";
import { Logo } from "../../logo";
import Cart from "../../../assets/shopping_cart.png"

export function Header() {
  const [display, toggleOpen] = useState("none");
  
  function onButtonClick() {
    toggleOpen(display === "flex" ? "none": "flex")
  }

  return (
    <HeaderStyles display={display}>
      <Navigation>
        <Logo />
        <MenuIcon onClick={() => onButtonClick()}>
          <img src="" alt="Menu Icon" />
        </MenuIcon>
        <MainLinksContainer display={display}>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/products">Products</NavLinks>
          <NavLinks to="/contact">Contact Us</NavLinks>
        </MainLinksContainer>
        <CartIcon to="/cart"><CartImage src={Cart}/>Cart</CartIcon>
      </Navigation>
    </HeaderStyles>
  );
}