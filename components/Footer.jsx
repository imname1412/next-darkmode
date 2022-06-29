import React from 'react'

const Footer = () => {
  return (
    <footer className='py-6 text-center text-gray-500 dark:text-slate-400'>
        <span className='text-gray-900 font-bold text-xl mr-2 dark:text-white'>Dev</span>&copy; {new Date().getFullYear()} All Rights Reserved
    </footer>
  )
}

export default Footer