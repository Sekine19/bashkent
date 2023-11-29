import React from 'react'
import { BackToTopButton } from './scroll/BackToTopButton'
import Header from './header/Header'
import { Footer } from './Footer'

function Layout({ children }) {
  return (
    <>
      <BackToTopButton />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout