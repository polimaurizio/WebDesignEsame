import React from 'react';
import {Navbar} from 'flowbite-react';
import {Button} from 'flowbite-react';
import Logo from '../Logo'

const Nav = ({props}) =>{
    return(
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <Logo />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>
                    Get started
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    About
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Services
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Nav