import React from 'react'
import { LoginBg, RegisterBg } from '../../assets'
import './register.scss'

const Register = () => {
  return (
      <div className='main-page'>
        <div className='left'>
            <img src={RegisterBg} className="bg-image"/>
        </div>
        <div className='right'>
           <img src={LoginBg} className="bg-image"/>
        </div>
      </div>
  )
}

export default Register