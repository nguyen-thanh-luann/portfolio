import React from 'react'

import Header from '../components/Header'
export default function AboutScreen() {
  return (
    <div>
      <Header />
      <div className='about'>
        <section>
          <h1 className='title'>About me</h1>
          <div className='overview'>
            <div className='info-group'>
              <h2>Personal info</h2>
              <div className='info'>
                <div className='info-detail'>
                  <p>
                    <span>Full name:</span> Nguyen Thanh Luan
                  </p>
                  <p>
                    <span>National:</span> Viet Nam
                  </p>
                  <p>
                    <span>Phone:</span> 070 6431 927
                  </p>
                  <p>
                    <span>Language:</span> Vietnamese, English
                  </p>
                  <p>
                    <span>Email:</span> imthanhluan@gmail.com
                  </p>
                </div>
                <div className='info-detail'>
                  <p>
                    <span>Birthday:</span> 02/06/2002
                  </p>
                  <p>
                    <span>Sex:</span> Male
                  </p>
                  <p>
                    <span>Address:</span> district 12, Ho Chi Minh city, VietNam
                  </p>
                </div>
              </div>
            </div>
            <div className='achievement'>
              <div className='achive'>
                <span>
                  1<sup>+</sup>
                </span>
                <p>Year of experience</p>
              </div>
              <div className='achive'>
                <span>
                  4<sup>+</sup>
                </span>
                <p>Projects completed</p>
              </div>
              <div className='achive'>
                <span>
                  2<sup>+</sup>
                </span>
                <p>Award won</p>
              </div>
            </div>
          </div>
        </section>
        <div className='line'></div>
        <section>
          <h1 className='title'>My Skills</h1>
          <div className='skill-group'>
            <div className='skill'>
              <div className='skill-image'>
                <img src={require('../assets/image/html.jpg')} alt='' />
              </div>
              <p>HTML</p>
            </div>
            <div className='skill'>
              <div className='skill-image'>
                <img src={require('../assets/image/css.jpg')} alt='' />
              </div>
              <p>CSS</p>
            </div>
            <div className='skill'>
              <div className='skill-image'>
                <img src={require('../assets/image/bootstrap.jpg')} alt='' />
              </div>
              <p>BOOTSTRAP</p>
            </div>
            <div className='skill'>
              <div className='skill-image'>
                <img src={require('../assets/image/git.jpg')} alt='' />
              </div>
              <p>GIT</p>
            </div>
            <div className='skill'>
              <div className='skill-image'>
                <img src={require('../assets/image/js.jpg')} alt='' />
              </div>
              <p>JAVASCRIPT</p>
            </div>
            <div className='skill'>
              <div className='skill-image'>
                <img src={require('../assets/image/react.jpg')} alt='' />
              </div>
              <p>REACTJS</p>
            </div>
            <div className='skill'>
              <div className='skill-image'>
                <img src={require('../assets/image/redux.jpg')} alt='' />
              </div>
              <p>REDUX</p>
            </div>
            <div className='skill'>
              <div className='skill-image'>
                <img src={require('../assets/image/responsive.jpg')} alt='' />
              </div>
              <p>RESPONSIVE</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
