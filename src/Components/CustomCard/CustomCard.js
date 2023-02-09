import React from 'react';
import {Card} from 'flowbite-react';
import '../../App.css';

const CustomCard = ({}) => {
    return(
        <div className={'sm:flex sm:justify-between mx-10 sm:place-content-center text-montserrat font-light'}>
                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="/Loghi/image_1.jpeg">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-montserrat font-semibold">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-montserrat font-light">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>

                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="/Loghi/image_3.jpeg">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>

                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="/Loghi/image_2.jpeg">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
        </div>

    );
}

export default CustomCard