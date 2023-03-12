'use client'

import { ThreeBarsIcon } from '@primer/octicons-react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

function Navbar () {
    const pathName = usePathname()

    const activeClass = 'text-white md:text-white bg-blue-600 md:bg-transparent'
    const inactiveClass = 'text-gray-400 md:border-0 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent'

    const isHome = pathName === '/' ? activeClass : inactiveClass
    const isCommits = pathName === '/commits' ? activeClass : inactiveClass
    const isAbout = pathName === '/about' ? activeClass : inactiveClass

    return (
        <nav className='p-3 rounded bg-gray-800 border-gray-700'>
            <div className='container flex flex-wrap items-center justify-between mx-auto'>
                <a href='#' className='flex items-center'>
                    <Image src='/logo-ftf-dark.svg' width={65} height={65} alt='Logo' className='h-6 mr-3 sm:h-10' />
                    <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>Take-Home Test</span>
                </a>
                <button data-collapse-toggle='navbar-solid-bg' type='button' className='inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600' aria-controls='navbar-solid-bg' aria-expanded='false'>
                    <span className='sr-only'>Open main menu</span>
                    <ThreeBarsIcon size={24} />
                </button>
                <div className='hidden w-full md:block md:w-auto' id='navbar-solid-bg'>
                    <ul className='flex flex-col mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-transparent border-gray-700'>
                        <li>
                            <Link href='/' className={'block py-2 pl-3 pr-4 rounded md:p-0 ' + isHome} aria-current='page'>Home</Link>
                        </li>
                        <li>
                            <Link href='/commits' className={'block py-2 pl-3 pr-4 rounded md:p-0 ' + isCommits} aria-current='page'>Commits</Link>
                        </li>
                        <li>
                            <Link href='/about' className={'block py-2 pl-3 pr-4 rounded md:p-0 ' + isAbout} aria-current='page'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
