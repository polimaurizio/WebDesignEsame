import React from 'react'

const CustomHorizontalCard = () => {
    return(
        <div className={'w-full md:flex pt-20 md:text-sm sm:text-sm text-sm'}>
            <div className={'flex md:block justify-center'}>
                <img src='Img/img_4.jpeg' className={'w-[60%] sm:w-[60%] pb-7 md:pb-0'}/>
            </div>
            <p className={'flex text-center sm:text-left items-center px-20 font-montserrat font-light'}>Since the middle of the eighties, the company has been studying new ideas and creating panels in thermoplastic materials, speeding up the production cycle considerably. Great attention has been paid to ergonomics, as well as to research into new technological developments.</p>
        </div>
    );
}

export default CustomHorizontalCard