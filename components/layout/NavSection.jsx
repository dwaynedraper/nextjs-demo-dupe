import React from 'react'
import styles from '@/styles/NavBar.module.scss'

export default function NavSection({ category, links }) {
  return (
    <div className='w-1/4'>
      <div className='flex flex-col'>
        {category && <div className={`${styles.category}`}>{category}</div>}
        <ul>
          {links.map((link, index) => <li key={index}>{link}</li>)}
        </ul>
      </div>
    </div>
  );
}
