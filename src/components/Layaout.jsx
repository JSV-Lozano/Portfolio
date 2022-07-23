import React from 'react'
import { Footer } from './Footer'
import {Header} from './Header'

function Layaout({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layaout