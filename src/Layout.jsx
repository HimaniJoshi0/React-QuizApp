import React from "react"
import Footer from "./components/footer"
import Navbar from "./components/navbar"

const Layout = ({children})=>{
    return(
      <div>
        <Navbar/>
       {children}
       <Footer/> 
      </div>
    )
}

export default Layout