import React from 'react'
import { Link } from 'react-router-dom'

import { AiFillGithub, AiFillEye } from 'react-icons/ai'
import Header from '../components/Header'
export default function ProjectScreen() {
  return (
    <div>
      <Header />
      <div className='project'>
        <section>
          <p className='title'>My Projects</p>
          <div className='project-list'>
            <div className='project-item'>
              <img alt='' src={require('../assets/image/portfolio.jpg')} />
              <div className='project-btns'>
                <Link to='/' target='_blank' className='project-btn'>
                  <AiFillEye /> <span>Demo</span>
                </Link>
                <Link to='/' target='_blank' className='project-btn'>
                  <AiFillGithub /> <span>Github</span>
                </Link>
              </div>
            </div>
            <div className='project-item'>
              <img alt='' src={require('../assets/image/portfolio.jpg')} />
              <div className='project-btns'>
                <Link to='/' target='_blank' className='project-btn'>
                  <AiFillEye /> <span>Demo</span>
                </Link>
                <Link to='/' target='_blank' className='project-btn'>
                  <AiFillGithub /> <span>Github</span>
                </Link>
              </div>
            </div>
            <div className='project-item'>
              <img alt='' src={require('../assets/image/portfolio.jpg')} />
              <div className='project-btns'>
                <Link to='/' target='_blank' className='project-btn'>
                  <AiFillEye /> <span>Demo</span>
                </Link>
                <Link to='/' target='_blank' className='project-btn'>
                  <AiFillGithub /> <span>Github</span>
                </Link>
              </div>
            </div>
            <div className='project-item'>
              <img alt='' src={require('../assets/image/portfolio.jpg')} />
              <div className='project-btns'>
                <Link to='/' target='_blank' className='project-btn'>
                  <AiFillEye /> <span>Demo</span>
                </Link>
                <Link to='/' target='_blank' className='project-btn'>
                  <AiFillGithub /> <span>Github</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
