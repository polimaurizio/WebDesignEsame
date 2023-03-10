import React from 'react'
import classNames from 'classnames'
import '../../App.css'

const Gallery = ({className}) => {
    let classes = classNames('', className);
    const links = [
        '/Img/colored/story_img_1.jpeg',
        '/Img/colored/story_img_2.jpeg',
        '/Img/colored/story_img_3.jpeg',
        '/Img/colored/story_img_4.jpeg',
        '/Img/colored/story_img_5.jpeg',
        '/Img/colored/story_img_6.jpeg',
    ];

    return (
        <div className={'w-full bg-gray-100 pt-5 pb-24 mt-20'}>
            <h1 className={'pl-5 text-[60px] sm:text-[70px] md:text-[90px] xl:text-[100px] font-montserrat font-bold text-[#2B2B2B]'}>Galleria</h1>
            <div className={'no-scrollbar overflow-x-scroll pt-5 flex h-56 sm:h-64 md:h-72 lg:h-80 pr-5'}>
                {links.map(link => (
                    <img className={'pl-5 [&:not(:hover)]:grayscale transition-all easy-in duration-300'}
                         src={link}/>
                ))}
            </div>
        </div>
    );
}

export default Gallery