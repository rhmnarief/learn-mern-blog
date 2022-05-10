import React from 'react'
import { LoginBg } from '../../../assets'
import './upload.scss'

const Upload = ({img, ...rest}) => {
  return (
    <div className="upload">
    <img className="preview" src={LoginBg} alt="Preview" />
    <input type="file" {...rest} />
</div>
  )
}

export default Upload