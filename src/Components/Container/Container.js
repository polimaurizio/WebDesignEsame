import React from 'react';
import classNames from 'classnames';

const Container = ({children, className}) =>{
    let classes = classNames('', className);

    return(
        <div className={classes}>
            {children}
        </div>
    );
}

export default Container