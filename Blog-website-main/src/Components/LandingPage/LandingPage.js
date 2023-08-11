import React from 'react';
import { NavLink } from "react-router-dom";

import classes from "./LandingPage.module.css";

import Button from "react-bootstrap/Button";
import { Player } from '@lottiefiles/react-lottie-player';

const LandingPage = () => {
  return (
    <div className={classes["main-content"]}>
        <div className={classes["content-box"]}>
            <div className={classes["left-content"]}>
                <h1>Update Knowledge</h1>
                <p>Start writing, reading and updating knowledge from blogs</p>
                <p>What are you waiting for? Start Now!!!!!</p>
                <Button variant="warning" size="lg">
                    <NavLink to="/blogs">Start Now</NavLink>
                </Button>
            </div>
            <div className={classes["right-content"]}>
                <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_wdth6bra.json"
                />
            </div>
        </div>
    </div>
  )
}

export default LandingPage