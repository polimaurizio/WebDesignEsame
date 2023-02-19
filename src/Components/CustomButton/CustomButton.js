import React from 'react';
import classNames from "classnames";

const CustomButton = ({children, className}) => {
    let classes = classNames('mt-20 py-2 px-4 bg-white hover:bg-gray-100 rounded-full border border-gray-700 text-gray-700', className);

    return (
        <div className={'flex justify-center'}>
            <button className={classes}>
                {children}
            </button>
        </div>
    )
};

export default CustomButton;