import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Dropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const LogoBlue = "#1B6AE3";

export const NavBarButton = styled(Button)({
  fontFamily: "Lato, sans-serif",
  fontSize: "0.9em",
  fontWeight: "600",
  color: "black",
  backgroundColor: "Transparent",
  padding: "0.7% 2%",
  margin: "0 0.5em",
  transition: "0.1s ease-in",
  letterSpacing: "0.08em",

  "&:hover": {
    transform: "scale(1.1)",
    color: LogoBlue,
  },
});

export const SignUpButton = styled(Button)({
  fontFamily: "Lato, sans-serif",
  fontWeight: "1000",
  color: "black",
  backgroundColor: "Transparent",
  padding: "0.8% 4%",
  margin: "0 0.8em",
  transition: "ease-in 0.2s",
  borderWidth: "0.2em",
  borderColor: LogoBlue,
  borderRadius: "0",

  "&:hover": {
    backgroundColor: LogoBlue,
    color: "white",
  },
});

const DropDownStyle = {
  fontFamily: "Lato, sans-serif",
  fontWeight: "600",
  padding: "0",
  border: "none",
  outline: "none",
  boxShadow: "none",
  color: "black",
  backgroundColor: "Transparent",
  letterSpacing: "0.08em",
  transition: "ease-in 0.1s",
};

const DropMenuStyle = {
  backgroundColor: "#e6ffff",
  fontFamily: "Lato, sans-serif",
  fontWeight: "bolder",
  border: "solid",
};

const DropItemStyle = {
  fontFamily: "Lato, sans-serif",
  fontWeight: "bold",
  fontSize: "0.9em",
  transition: "0.2s ease-in",
};

const DropMenuItems = [
  { name: "About" },
  { name: "Highlights" },
  { name: "Streams" },
  { name: "Event Schedule" },
  { name: "FAQs" },
  { name: "Resources" },
];

export const HackDropDown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle style={DropDownStyle}>Hack</Dropdown.Toggle>
      <Dropdown.Menu style={DropMenuStyle}>
        {DropMenuItems.map((item) => (
          <Dropdown.Item style={DropItemStyle}>{item.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
