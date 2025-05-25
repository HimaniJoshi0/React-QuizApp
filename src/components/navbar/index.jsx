import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navdata } from '../../data'
import { Logo } from '../../assets/icons'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LoginIcon from '@mui/icons-material/Login'

const Navbar = () => {
  const location = useLocation()
  const currentRoute = location.pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const renderHeader = (item, index) => (
    <div key={index}>
      <Link
        to={item.link}
        className={`transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 ${currentRoute === item.link ? 'bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-white' : 'text-gray-300'}`}
      >
        {item.title}
      </Link>
    </div>
  )

  return (
    <>
      <div className="bg-[#0A0F1C]/80 backdrop-blur-md text-gray-300 w-full p-3 text-center border-b border-white/5">
        <span className="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text font-medium">
          New: QuizBot can now generate questions from images!
        </span>
      </div>
      <div className="sticky top-0 z-50 bg-[#0A0F1C]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Logo height="40" width="40" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text">
              QuizAI
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {Navdata.map(renderHeader)}
            <Link
              to="/login"
              className="flex items-center space-x-2 bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] hover:from-[#00FFB2] hover:to-[#00A3FF] text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              <LoginIcon className="w-5 h-5" />
              <span>Login</span>
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#0A0F1C]/95 backdrop-blur-xl z-50 md:hidden">
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                  <Logo height="40" width="40" />
                  <span className="text-xl font-bold bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text">
                    QuizAI
                  </span>
                </Link>
                <button
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-4 items-center justify-center flex-1">
                {Navdata.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className={`text-lg transition-all duration-300 px-6 py-3 rounded-lg w-full text-center hover:bg-white/10 ${currentRoute === item.link ? 'bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-white' : 'text-gray-300'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  to="/login"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] hover:from-[#00FFB2] hover:to-[#00A3FF] text-white px-6 py-3 rounded-lg w-full transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LoginIcon className="w-5 h-5" />
                  <span>Login</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
