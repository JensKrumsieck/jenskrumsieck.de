import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect } from 'react';

import Logo from '../assets/svg/logo.svg'

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
                    <span>Jens Krumsieck</span>
                </a>
            </Link>
        </div>
        <ul className="nav-links">
            <li>
                <Link href="/">
                    <a className="nav-item">Home</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="nav-item">Home</a>
                </Link>
            </li>
        </ul>
    </nav >
)
}
