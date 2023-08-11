import React from 'react';

import classes from "./BodyCard.module.css";

const BodyCard = (props) => {

    const bodyClass = classes.content + " " + props.className;

  return (
    <div className={bodyClass}>{props.children}</div>
  )
}

export default BodyCard