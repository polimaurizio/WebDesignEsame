import React from 'react';
import classNames from "classnames";

const Button = ({children, className}) => {
    let classes = classNames('', className);

    return(
        <button className={classes}>
            {children}
        </button>
    )
};

export default Button;