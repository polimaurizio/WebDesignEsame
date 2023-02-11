import React from 'react';
import {Card} from 'flowbite-react';
import '../../App.css';

const CustomCard = ({}) => {
    return(
        <div className={'sm:flex sm:justify-between mx-10 sm:place-content-center text-montserrat font-light'}>
                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="/Loghi/image_1.jpeg" className={'h-full'}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Esperto Edotto
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 font-montserrat font-normal">
                            Il nuovo modello di punta delle macchine a leva domestiche.
                            Materiali pregiati e possibilità di controllo costante della pressione di erogazione esercitata abbassando...
                        </p>
                    </Card>
                </div>

                <div className="max-w-sm mt-20 sm:mx-4 mx-auto" >
                    <Card imgSrc="/Loghi/image_3.jpeg" className={'h-full'}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Esperto Abile
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 font-montserrat font-normal">
                            Il nuovo modello di punta delle macchine a leva domestiche.
                            Materiali pregiati e possibilità di controllo costante della pressione di erogazione esercitata abbassando la...
                        </p>
                    </Card>
                </div>

                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="/Loghi/image_2.jpeg" className={'h-full'}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Esperto Competenze
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 font-montserrat font-normal">
                            Il nuovo modello di punta delle macchine a leva domestiche.
                            Materiali pregiati e possibilità di controllo costante della pressione di erogazione esercitata abbassando la...
                        </p>
                    </Card>
                </div>
        </div>

    );
}

export default CustomCard