import React from 'react';
import classNames from "classnames";
import {Button} from 'flowbite-react';

const CustomButton = ({children, className}) => {
    let classes = classNames('mt-20 w-max hover:bg-gray-100', className);

    return (
        <div className={'flex justify-center'}>
            <Button
                className={classes}
                color="gray"
                pill={true}
            >
                {children}
            </Button>
        </div>
    )
};

export default CustomButton;