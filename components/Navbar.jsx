import React , { useState , useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Button from './Button'



const Navbar = () => {

  const links = ['home','timeline','error']

  const [mounted, setMounted] = useState(false)
  const {systemTheme , theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  


  const changeTheme = () => {

    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme


    if(currentTheme === 'dark'){
      return (
        <Button
          className='bg-gray-700'
          onClick={() => setTheme('light')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-slate-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </Button>
        )
    }else{
      return(
      <Button
          className='bg-gray-200'
          onClick={() => setTheme('dark')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </Button>

      )
    }
    
  }


  return (
    <div className='w-full'>
      <div className='h-24 flex p-[2rem] justify-between items-center'>
        {/* <div className='dark:text-slate-400 font-bold'>
          LOGO
        </div> */}
        <div>
          <ul className='flex items-center gap-5'>
            {links.map((link,index) => (
              <li 
                key={index}
                className='dark:text-slate-400 uppercase dark:hover:text-white hover:text-slate-400'
              >
                <Link href={`${link === 'home' ? '/':`/${link}`}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* <button 
            className='bg-gray-200 dark:bg-black dark:text-white p-2 rounded-md ' 
            onClick={() => setTheme(theme === 'light' ? 'dark':'light')}
          >
            
            {theme === 'dark' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </>
            )
            :
            (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </>
            )
            }

          </button> */}
          {changeTheme()}

          
         
        </div>
      </div>
      
    </div>
  )
}

export default Navbar