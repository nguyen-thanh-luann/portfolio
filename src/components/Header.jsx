import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1, HiOutlineX } from 'react-icons/hi'

export default function Header() {
  const [isShowMenu, setIsshowMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const mediaQuery = window.matchMedia('(max-width: 500px)')

  useEffect(() => {
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    console.log('isMobile: ' + isMobile)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [mediaQuery])

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (isShowMenu && isMobile) {
      setTimeout(function () {
        document.querySelector('.menu-list').style.display = 'flex'
        document.querySelector('.menu-open-btn').style.display = 'none'
      }, 20)
    } else if (!isShowMenu && isMobile) {
      document.querySelector('.menu-list').style.display = 'none'
      document.querySelector('.menu-open-btn').style.display = 'inline'
    } else {
      document.querySelector('.menu-list').style.display = 'flex'
      document.querySelector('.menu-open-btn').style.display = 'none'
    }
  }, [isShowMenu, isMobile])
  const toggleMenu = () => {
    setIsshowMenu(!isShowMenu)
  }
  return (
    <header>
      <div className='nav'>
        <div className='nav-logo'>
          <h4 className='logo'>imthanhluan</h4>
        </div>
        <div className='nav-menu'>
          <ul className='menu-list'>
            <li className='menu-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='menu-item'>
              <Link to='/aboutme'>About me</Link>
            </li>
            <li className='menu-item'>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className='menu-item'>
              <Link to='/'>Contact me</Link>
            </li>
          </ul>

          <HiOutlineX className='menu-close-btn' onClick={toggleMenu} />
        </div>
        <HiMenuAlt1 className='menu-open-btn' onClick={toggleMenu} />
      </div>
    </header>
  )
}
