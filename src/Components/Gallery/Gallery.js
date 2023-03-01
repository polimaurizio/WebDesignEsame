import React from 'react'
import classNames from 'classnames'
import '../../App.css'

const Gallery = ({className}) => {
    let classes = classNames('', className);
    const links = [
        'https://www.lapavoni.com/wp-content/uploads/2016/11/image8-7.jpg',
        'https://www.lapavoni.com/wp-content/uploads/2016/11/image10-9.jpg',
        'https://www.lapavoni.com/wp-content/uploads/2016/11/image9-8.jpg',
        'https://www.lapavoni.com/wp-content/uploads/2016/11/image3-9.jpg',
        'https://www.lapavoni.com/wp-content/uploads/2016/11/image4-8.jpg'
    ];

    return (
        <div className={'w-full pt-32'}>
            <div className={'no-scrollbar overflow-x-scroll flex h-56 sm:h-64 md:h-72 lg:h-80 pr-5'}>
                {links.map(link => (
                    <img className={'pl-5 [&:not(:hover)]:sepia hue-rotate-60 transition-all easy-in duration-300'}
                         src={link}/>
                ))}
            </div>
        </div>
    );
}

export default Gallery