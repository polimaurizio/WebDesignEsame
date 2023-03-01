import React from 'react'
import {Carousel, Flowbite} from "flowbite-react";



//{rightControl: "hidden", leftControl: "hidden"}}

const Carrosello = ({}) =>{
    return(
        <div className="h-[600px] sm:h-[600px] xl:h-[700px] relative pt-[3.1rem]">
            <Flowbite
                theme={{
                    theme: {
                        carousel: {
                            indicators: {wrapper: 'z-50 absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3'},
                            rightControl: "hidden",
                            leftControl: "hidden",
                            scrollContainer: {base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth indiana-scroll-container indiana-scroll-container--hide-scrollbars rounded-none"}
                        }
                    }
                }}
            >

                <Carousel slideInterval={4000} className={"-px-[2px]"}

                >
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
                    <h1 className={'uppercase font-montserrat text-white  sm:text-[40px] md:text-[50px] lg:text-[60px] text-[30px] z-30 text-center'}>Dal
                        1905 <br/> macchine per caffè
                    </h1>
                </div>
            </Flowbite>
        </div>
    );
}

export default Carrosello