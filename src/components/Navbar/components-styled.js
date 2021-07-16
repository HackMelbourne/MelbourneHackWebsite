import React from "react";
import { styled, withTheme } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

export const NavBarButton = styled(Button)({
    
    fontFamily: "Lato, sans-serif",
    fontSize: "0.8em",
    fontWeight: "600",
    color: "black",
    backgroundColor: "Transparent",
    padding: "0.7% 2%",
    margin: "0 0.5em",
    transition: "ease-in 0.2s",
    letterSpacing: "0.08em",

    '&:hover': {
        transform: "scale(1.1)",
        backgroundColor: "black",
        color: "white",
    }
})

export const SignUpButton = styled(Button)({
    fontFamily: "Lato, sans-serif",
    fontWeight: "1000",
    color: "black",
    backgroundColor: "Transparent",
    padding: "0.8% 4%",
    margin: "0 0.8em",
    transition: "ease-in 0.2s",
    borderWidth: "0.2em",
    borderColor: "#1B6AE3",
    borderRadius: "0",

    '&:hover': {
        backgroundColor: "#F1F692",
        color: "black",
    }
})