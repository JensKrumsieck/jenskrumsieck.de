import React from 'react'
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

            </footer>
        </>
    )
}
