import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Search from '../shared/Search'

export default function Navbar() {
  return (
    <div className='h-12 flex justify-between items-center p- '>
        <nav>
            <Link href='/'>בית</Link>
            <Link href='/about'>אודות</Link>
            <Link href='/create-post'>יצירת פוסט</Link>
        </nav>
        <Search/>
        <MobileMenu/>
        Navbar</div>
  )
}
