import React from 'react'

const Button = ({title, ...rest}) => {
  return (
    <button className='button'>{title}</button>
  )
}
export default Button;