import React from 'react'
import {Button, Gap, Input, Link} from '../../components'
import { LoginBg } from '../../assets'

const Login = () => {
  return (
         <div className='main-page'>
        <div className='left'>
            <img src={LoginBg} className="bg-image" alt="imageBg" />
        </div>
        <div className='right'>
          <p className='title'>Login</p>
          <Gap height={18}/>
          <Input label="Email" placeholder="Email" />
          <Gap height={18} />
          <Input label="Password" placeholder="Password" />
          <Gap height={50} />
          <Button title="Login" />
          <Gap height={100} />
          <Link title="Belum punya akun, silahkan daftar"/>
        </div>
      </div>
  )
}

export default Login