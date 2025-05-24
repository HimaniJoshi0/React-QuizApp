import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navdata } from '../../data'

const Navbar = () => {
  const location = useLocation()
  const currentRoute = location.pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const renderHeader = (item, index) => (
    <div key={index}>
      <Link
        to={item.link}
        className={`transition-all duration-300 px-4 py-2 rounded ${
          currentRoute === item.link ? 'bg-white/20' : ''
        }`}
      >
        {item.title}
      </Link>
    </div>
  )

  return (
    <>
      <div className="bg-[#343C57] text-white w-full p-2 text-center">
        QuizBot is now capable of generating questions from images within the uploaded documents
        <br />
        Soon you will be able to create and download INTERACTIVE SIMULATIONS on any topic, picture, video or a link
      </div>
      <div
        className="py-7 px-8 flex justify-between border-b border-white/20"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #70ACD4, #9BBCEE, #A8CAE8, #4882E6, #245595, #70ACD4)',
        }}
      >
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="hidden md:flex gap-10">{Navdata.map(renderHeader)}</div>

        {isMenuOpen ? (
          <div className="absolute top-0 left-0 border-2 w-full h-screen bg-black/80 text-white backdrop-blur-md md:hidden p-4">
            <div className="flex justify-between items-center">
              <h1>LOGO</h1>
              <div onClick={() => setIsMenuOpen(false)}>CROSS</div>
            </div>

            <div className="flex justify-center items-center flex-col gap-4 w-full h-full text-white">
              {Navdata.map(renderHeader)}
            </div>
          </div>
        ) : null}

        <div className="flex md:hidden" onClick={() => setIsMenuOpen(true)}>
          Icon
        </div>
        <Link to="/login">Login</Link>
      </div>
    </>
  )
}

export default Navbar
