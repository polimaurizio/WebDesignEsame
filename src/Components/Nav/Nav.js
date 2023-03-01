import React from 'react';
import {Navbar} from 'flowbite-react';
import Image from '../Image'
import Logo from '../Logo';
import '../../App.css';

const Nav = ({}) => {
    return (
        <Navbar
            className={'h-auto fixed z-50 w-full rounded-none font-montserrat font-light h-[3.5rem] bg-white shadow-md shadow-black/8'}
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
            <Navbar.Collapse className={'text-black w-screen outline-none w-screen text-center'}>
                <Navbar.Link
                    href="/navbars"
                >
                    <p className={'text-black hover:text-black'}>Home</p>
                </Navbar.Link>
                <Navbar.Link>
                    <a href="#storia_anchor" className={'hover:text-black'}>Storia</a>
                </Navbar.Link>
                <Navbar.Link>
                    <a href="#prodotti_anchor" className={'hover:text-black'}>Prodotti</a>
                </Navbar.Link>
                <Navbar.Link>
                    <a href={'#contatti_footer'} className={'hover:text-black'}>Contatti</a>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav