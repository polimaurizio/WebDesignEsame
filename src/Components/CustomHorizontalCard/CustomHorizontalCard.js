import React from 'react'

const CustomHorizontalCard = () => {
    return(
        <div className={'w-[80%] md:w-[60%] pt-20 mx-auto flex justify-center md:grid grid-cols-2 gap-7 font-montserrat font-light text-center md:text-justify text-sm sm:text-sm xl:text-base'}>
            <p>
                Since the middle of the eighties, the company has been studying new ideas and creating panels in thermoplastic materials, speeding up the production cycle considerably. Great attention has been paid to ergonomics, as well as to research into new technological developments.
                <br /><br />
                In the commercial market, besides the traditional lever and semiautomatic machines, some electronic, some with volumetric dosing, and other reliable models have been introduced.
                <br /><br />
                The same principles are also applied to the domestic machines, which include a wide range of models enabling the preparation of excellent coffee at home.
            </p>
            <p className={'hidden md:block'}>
                Leaders in domestic machines, the Europiccola and Professional represent a co-ordination of elegance, quality and reliability; manufactured since 1961, these machines will never be out of fashion; the Professional is exhibited in the Museum of Modern Art in New York.
                <br /><br />
                On 29 January 1999 La Pavoni obtained the UNI EN ISO 9001 certification (number 9130 PAV2) and IQ Net – registration number IT-8070 issued by the competent Certification Institutes and the conformity to the norms ISO 9001:2000 of 14 November 2003.
            </p>
        </div>
    );
}

export default CustomHorizontalCard
