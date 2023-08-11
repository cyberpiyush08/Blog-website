import React from 'react';

import classes from './Subheading.module.css';

const Subheading = (props) => {
  return (
    <div className={classes["sub-heading"]}>
        <h1>{props.children}</h1>
    </div>
  )
}

export default Subheading