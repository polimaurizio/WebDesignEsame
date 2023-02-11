import React from 'react';
import {Navbar} from 'flowbite-react';
import Image from '../Image'
import Logo from '../Logo';

const Nav = ({}) => {
    return (

        <Navbar
            className={'fixed z-50 w-full rounded-none font-montserrat font-light'}
            fluid={true}
            rounded={true}


        >

            <Navbar.Brand href="#">
                <Logo/>
            </Navbar.Brand>

            <div className="flex md:order-2">
                <Image/>
                <Navbar.Toggle/>
            </div>

            {/* Collapse */}
            <Navbar.Collapse className={'text-black'}>
                <Navbar.Link
                    href="/navbars"
                    //active={true}
                >
                    <p className={'text-black hover:text-black'}>Home</p>
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    <p className={'hover:text-black'}>Storia</p>
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    <p className={'hover:text-black'}>Prodotti</p>
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    <p className={'hover:text-black'}>Contatti</p>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav