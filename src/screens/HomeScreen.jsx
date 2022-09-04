import React from 'react'

import Header from '../components/Header'

export default function HomeScreen() {
  return (
    <div>
      <Header />
      <div className='home'>
        <section>
          <h2>Hi Guys!</h2>
          <h3>I am</h3>
          <h1 className='name'>Nguyen Thanh Luan</h1>
          <div className='line'></div>
          <p className='desc'>
            I love creating websites or apps that help people work more
            efficiently. Step by step, I am continually evaluating and upgrading
            my skills so that I stays at the cutting edge of web!{' '}
          </p>
        </section>
      </div>
    </div>
  )
}
