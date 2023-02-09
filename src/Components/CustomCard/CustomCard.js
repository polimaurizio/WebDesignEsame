import React from 'react';
import {Card} from 'flowbite-react';

const CustomCard = ({props}) => {
    return(
        <div className={'sm:flex sm:justify-between mx-10 sm:place-content-center'}>
                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="https://flowbite.com/docs/images/carousel/carousel-1.svg">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>

                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="https://flowbite.com/docs/images/carousel/carousel-1.svg">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>

                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="https://flowbite.com/docs/images/carousel/carousel-1.svg">
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