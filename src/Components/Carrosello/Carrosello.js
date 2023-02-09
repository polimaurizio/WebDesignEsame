import React from 'react'
import {Carousel, Flowbite} from "flowbite-react";

const Carrosello = ({}) =>{
    return(
        <div className="h-[400px] sm:h-[500px] xl:h-[600px]">
            <Flowbite theme={{theme:{carousel:{scrollContainer:{base:"flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth indiana-scroll-container indiana-scroll-container--hide-scrollbars rounded-none"}}}}}>

            <Carousel slideInterval={4000} className={"-px-[2px]"}>
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                    className={""}
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    className={""}
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="..."
                    className={""}
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                    className={""}
                />
            </Carousel>
            </Flowbite>
        </div>
    );
}

export default Carrosello