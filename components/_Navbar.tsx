import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect } from 'react';

import Logo from '../assets/svg/logo.svg'
import _Social from './_Social';

const openNav = () => {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

export default function Navbar() {
    useEffect(() => {
        var links = document.querySelectorAll('.nav-item');
        links.forEach(l => {
            l.addEventListener('click', () => {
                var navLinks = document.querySelector('.nav-links');
                navLinks.classList.remove('open');
        })
    });
})
return (
    <nav className="navbar container">
        <div className="hamburger">
            <FontAwesomeIcon icon={faBars} onClick={openNav} />
        </div>
        <div className="nav-brand">
            <Link href="/">
                <a>
                    <Logo />
                    <h1>Jens Krumsieck</h1>
                </a>
            </Link>
        </div>
       <_Social/>
    </nav >
)
}
