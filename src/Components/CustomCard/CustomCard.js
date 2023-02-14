import React from 'react';
import {Card} from 'flowbite-react';
import CustomButton from '../CustomButton';

import '../../App.css';

const CustomCard = ({}) => {
    return (
        <div>
            <div
                className={'sm:flex justify-between md:justify-center mx-10 sm:place-content-center text-montserrat font-light md:text-sm sm:text-xs text-sm'}>


                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="/Loghi/image_1.jpeg" className={'h-full'}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Esperto Edotto
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 font-montserrat font-normal">
                            Il nuovo modello di punta delle macchine a leva domestiche.
                            Materiali pregiati e possibilità di controllo costante della pressione di erogazione
                            esercitata
                            abbassando...
                        </p>
                    </Card>
                </div>


                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="/Loghi/image_1.jpeg" className={'h-full'}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Esperto Edotto
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 font-montserrat font-normal">
                            Il nuovo modello di punta delle macchine a leva domestiche.
                            Materiali pregiati e possibilità di controllo costante della pressione di erogazione
                            esercitata
                            abbassando...
                        </p>
                    </Card>
                </div>


                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="/Loghi/image_1.jpeg" className={'h-full'}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Esperto Edotto
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 font-montserrat font-normal">
                            Il nuovo modello di punta delle macchine a leva domestiche.
                            Materiali pregiati e possibilità di controllo costante della pressione di erogazione
                            esercitata
                            abbassando...
                        </p>
                    </Card>
                </div>


                <div className="max-w-sm mt-20 sm:mx-4 mx-auto sm:hidden md:block">
                    <Card imgSrc="/Loghi/image_1.jpeg" className={'h-full'}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Esperto Edotto
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 font-montserrat font-normal">
                            Il nuovo modello di punta delle macchine a leva domestiche.
                            Materiali pregiati e possibilità di controllo costante della pressione di erogazione
                            esercitata
                            abbassando...
                        </p>
                    </Card>
                </div>
            </div>

            <CustomButton className={''}>Scopri di più!</CustomButton>
        </div>
    );
}

export default CustomCard