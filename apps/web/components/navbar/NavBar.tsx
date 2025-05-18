import React from 'react'
import MyButton from './Button'
import Logo from './Logo'

const NavBar = () => {
    return (
        <nav className='bg-transparent'>
            <div className=".container flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap py-6">
                <Logo />
                <MyButton />
            </div>
        </nav>
    )
}

export default NavBar