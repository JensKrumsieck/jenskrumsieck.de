import React from 'react'
import Footer from './_Footer'
import Navbar from './_Navbar'

export default function Layout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
