import React from 'react'
import MyButton from './Button'
import Logo from './Logo'

const NavBar = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 w-full z-10">
            <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap py-6">
                <Logo />
                <MyButton />
            </div>
        </nav>
    );
};

export default NavBar