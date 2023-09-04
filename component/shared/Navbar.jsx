import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  return (
    <div className='h-12 flex justify-between items-center m-6'>
        <nav>
            <Link href='/'>בית</Link>
            <Link href='/about'>אודות</Link>
            <Link href='/create-post'>יצירת פוסט</Link>
        </nav>
        <MobileMenu/>
        Navbar</div>
  )
}
