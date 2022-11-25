import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">🎯</span>
        Aim
      </a>
      <a href="/theory" tabIndex={tabIndex}>
        <span aria-hidden="true">📖</span>
        Theory
      </a>
      <a href="/execution" tabIndex={tabIndex}>
        <span aria-hidden="true">🦾</span>
        Execution
      </a>
      <a href="/about-us" tabIndex={tabIndex}>
        <span aria-hidden="true">👤</span>
        About Us
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
