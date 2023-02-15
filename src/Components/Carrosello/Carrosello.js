import React from 'react'
import {Carousel, Flowbite} from "flowbite-react";

const Carrosello = ({}) =>{
    return(
        <div className="h-[600px] sm:h-[600px] xl:h-[700px] relative">
            <Flowbite
                theme={{theme: {carousel: {scrollContainer: {base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth indiana-scroll-container indiana-scroll-container--hide-scrollbars rounded-none"}}}}}>
                <Carousel slideInterval={4000} className={"-px-[2px]"}>
                    <img
                        src="/Img/img_1.jpg"
                        alt="..."
                        className={"object-cover h-full "}
                    />
                    <img
                        src="/Img/img_2.jpg"
                        alt="..."
                        className={"object-cover h-full "}
                    />
                    <img
                        src="/Img/img_3.jpg"
                        alt="..."
                        className={"object-cover h-full "}
                    />
                </Carousel>
                <div
                    className={'before:bg-black before:opacity-50 before:inset-0 before:absolute before:content-[""] absolute inset-0 flex justify-center items-center pointer-events-none'}>
                    <h1 className={'uppercase font-montserrat text-white  sm:text-[40px] md:text-[50px] lg:text-[60px] text-[30px] z-50 text-center'}>Dal
                        1905 <br/> macchine per caffè
                    </h1>
                </div>
            </Flowbite>
        </div>
    );
}

export default Carrosello