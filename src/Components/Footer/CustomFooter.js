import React from 'react';
import {Footer} from 'flowbite-react';
import Logo from '../Logo';

const CustomFooter = ({}) => {
    return(
        <Footer container={true} className={'pt-32'}>
            <div className="w-full">
                <Footer.Divider/>
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className={'mb-8'}>

                        <Logo/>

                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Referenti"/>
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Maurizio Poli
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Marco Rossi
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Contatti" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    366 2287 342
                                </Footer.Link>
                                <Footer.Link href="#">
                                    266 5416 761
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Indirizzo"/>
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Via Porta Nuova
                                    <br/> Verona - VR
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="La Pavoni S.R.L.™"
                        year={2023}
                    />
                    <Footer.LinkGroup col={true}>
                        <Footer.Link href="#">
                            Privacy & Policy
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
            </div>
        </Footer>
    );
}

export default CustomFooter