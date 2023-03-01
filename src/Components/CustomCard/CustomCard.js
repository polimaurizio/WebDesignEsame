import React from 'react';
import {Card} from 'flowbite-react';

import '../../App.css';

const CustomCard = ({}) => {
    return (

            <div
                className={'grid grid-cols-[repeat(auto-fit,minmax(calc(6rem+10vw),1fr))] gap-3 sm:gap-2 md:gap-5 mx-10 text-montserrat font-light md:text-sm sm:text-sm text-sm'}>


                <div className="max-w-sm mt-20 sm:mx-4 mx-auto focus:outline-none">
                    <Card imgSrc="/Loghi/image_1.jpeg" className={'h-full hover:bg-neutral-100 cursor-pointer'}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Esperto Edotto
                        </h5>
                        <p className="hidden sm:block font-normal text-gray-700 dark:text-gray-400 font-montserrat font-normal">
                            Il nuovo modello di punta delle macchine a leva domestiche.
                            Materiali pregiati e possibilità di controllo costante della pressione di erogazione
                            esercitata
                            abbassando...
                        </p>
                        <div className={'flex w-full justify-end pt-2'}>
                            <button
                                className={'border hover:bg-gray-200 rounded-full py-2 px-4'}>Aggiungi
                            </button>
                        </div>
                    </Card>
                </div>


                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="/Loghi/image_3.jpeg" className={'h-full hover:bg-neutral-100 cursor-pointer'}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Esperto Abile
                        </h5>
                        <p className="hidden sm:block font-normal text-gray-700 dark:text-gray-400 font-montserrat font-normal">
                            Il nuovo modello di punta delle macchine a leva domestiche.
                            Materiali pregiati e possibilità di controllo costante della pressione di erogazione
                            esercitata
                            abbassando...
                        </p>
                        <div className={'flex w-full justify-end pt-2'}>
                            <button
                                className={'border hover:bg-gray-200 rounded-full py-2 px-4'}>Aggiungi
                            </button>
                        </div>
                    </Card>
                </div>


                <div className="max-w-sm mt-20 sm:mx-4 mx-auto">
                    <Card imgSrc="/Loghi/image_1.jpeg" className={'h-full hover:bg-neutral-100 cursor-pointer'}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Esperto Edotto
                        </h5>
                        <p className="hidden sm:block font-normal text-gray-700 dark:text-gray-400 font-montserrat font-normal">
                            Il nuovo modello di punta delle macchine a leva domestiche.
                            Materiali pregiati e possibilità di controllo costante della pressione di erogazione
                            esercitata
                            abbassando...
                        </p>
                        <div className={'flex w-full justify-end pt-2'}>
                            <button
                                className={'border hover:bg-gray-200 rounded-full py-2 px-4'}>Aggiungi
                            </button>
                        </div>
                    </Card>
                </div>


                <div className="max-w-sm mt-20 sm:mx-4 mx-auto sm:hidden xl:block">
                    <Card imgSrc="/Loghi/image_3.jpeg" className={'h-full hover:bg-neutral-100 cursor-pointer'}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Esperto Abile
                        </h5>
                        <p className="hidden sm:block font-normal text-gray-700 dark:text-gray-400 font-montserrat font-normal">
                            Il nuovo modello di punta delle macchine a leva domestiche.
                            Materiali pregiati e possibilità di controllo costante della pressione di erogazione
                            esercitata
                            abbassando...
                        </p>
                        <div className={'flex w-full justify-end pt-2'}>
                            <button
                                className={'border hover:bg-gray-200 rounded-full py-2 px-4'}>Aggiungi
                            </button>
                        </div>
                    </Card>
                </div>
        </div>
    );
}

export default CustomCard