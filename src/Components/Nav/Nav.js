import React from 'react';
import {Navbar} from 'flowbite-react';
import Image from '../Image'
import Logo from '../Logo';

const Nav = ({}) => {
    return (

        <Navbar
            className={'mt-2 ml-3 mr-3 mb-3'}
            fluid={true}
            rounded={true}

        >

            <Navbar.Brand href="https://flowbite.com/">
                <Logo />
            </Navbar.Brand>

            <div className="flex md:order-2">
                <Image />
                <Navbar.Toggle />
            </div>

            {/* Collapse */}
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    //active={true}
                >
                    <p className={'text-[#FF0000] hover:text-[#FF0000]'}>Home</p>
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    <p className={'hover:text-[#FF0000]'}>Storia</p>
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    <p className={'hover:text-[#FF0000]'}>Prodotti</p>
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    <p className={'hover:text-[#FF0000]'}>Contatti</p>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav