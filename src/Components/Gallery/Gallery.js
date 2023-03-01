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
        <div className={'w-full pt-32'}>
            <div className={'no-scrollbar overflow-x-scroll flex h-56 sm:h-64 md:h-72 lg:h-80 pr-5'}>
                {links.map(link => (
                    <img className={'pl-5 [&:not(:hover)]:grayscale transition-all easy-in duration-300'}
                         src={link}/>
                ))}
            </div>
        </div>
    );
}

export default Gallery