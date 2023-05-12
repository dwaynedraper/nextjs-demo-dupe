import React from 'react'
import styles from '@/styles/NavBar.module.scss'

type MegamenuMultilevelProps = {
  children: React.ReactNode
  handleLinkLeave: () => void
}

export default function MegamenuMultilevel({ children, handleLinkLeave }: MegamenuMultilevelProps) {
  return (
    <div
      className={`absolute top-full left-0 w-full z-50 bg-brand-dark text-brand-light pt-2 border-t-2 border-brand-light ${styles.megamenu}`}
      onMouseLeave={handleLinkLeave}
    >
      <div className='container mx-auto px-4 py-2 flex'>
        {children}
      </div>
    </div>
  )
}
