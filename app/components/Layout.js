import React from 'react'
import Nav from './Nav'
import Header from './Header'
import TopLeftImg from './TopLeftImg'

export const Layout = ({children}) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat font-Ubuntu relative`}>
      <TopLeftImg/>
      <Nav/>
      <Header/>
      {children}
    </div>
  )
}
