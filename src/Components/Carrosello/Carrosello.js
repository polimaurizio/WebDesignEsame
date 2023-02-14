import React from 'react'
import {Carousel, Flowbite} from "flowbite-react";

const Carrosello = ({}) =>{
    return(
        <div className="h-[600px] sm:h-[600px] xl:h-[700px]">
            <Flowbite
                theme={{theme: {carousel: {scrollContainer: {base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth indiana-scroll-container indiana-scroll-container--hide-scrollbars rounded-none"}}}}}>
                <Carousel slideInterval={4000} className={"-px-[2px]"}>
                    <img
                        src="/Img/img_1.jpg"
                        alt="..."
                        className={"object-cover h-full"}
                    />
                    <img
                        src="/Img/img_2.jpg"
                        alt="..."
                        className={"object-cover h-full"}
                    />
                    <img
                        src="/Img/img_3.jpg"
                        alt="..."
                        className={"object-cover h-full"}
                    />
                </Carousel>
            </Flowbite>

        </div>
    );
}

export default Carrosello