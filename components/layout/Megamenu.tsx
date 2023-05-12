import React from 'react'
import styles from '@/styles/NavBar.module.scss'

export default function Megamenu({ children }) {
  return (
    <div
      className={`absolute top-full left-0 w-full z-50 bg-brand-dark text-brand-light pt-2 border-t-2 border-brand-light ${styles.megamenu}`}
    >
      <div className='container mx-auto px-4 py-2 flex'>
        {children}
      </div>
    </div>
  )
}
