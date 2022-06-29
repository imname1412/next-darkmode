import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>App</title>
      </Head>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-1'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout