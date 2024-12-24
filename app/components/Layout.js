import React from 'react'
import Nav from './Nav'
import Header from './Header'
import TopLeftImg from './TopLeftImg'

export const Layout = ({children}) => {
  return (
    <div>
      <TopLeftImg/>
      <Nav/>
      <Header/>
      {children}
    </div>
  )
}
