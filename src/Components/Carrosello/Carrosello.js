import React from 'react'
import {Carousel} from "flowbite-react";

const Carrosello = ({}) =>{
    return(
        <div className="h-[400px] sm:h-[500px] xl:h-[600px]">
            <Carousel className={'rounded-none'}>
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    alt="..."
                />
            </Carousel>
        </div>
    );
}

export default Carrosello