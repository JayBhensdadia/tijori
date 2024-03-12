import React from 'react'
import { DarkThemeToggle, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Footer } from 'flowbite-react';

function Header() {
    return (
        <Navbar fluid rounded className='w-full border-b-2 pb-2'>
            <div>
                <Navbar.Brand href="https://flowbite-react.com">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-key" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M12.5 11.5l-4 4l1.5 1.5" />
                        <path d="M12 15l-1.5 -1.5" />
                        <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    </svg>
                    <span className="self-center whitespace-nowrap text-3xl font-semibold text-slate-700 dark:text-slate-300 px-2">Tijori</span>
                </Navbar.Brand>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {/* <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link> */}
                <DarkThemeToggle className='bg-slate-600 text-white' />
            </Navbar.Collapse>


        </Navbar>
    )
}

export default Header