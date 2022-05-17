import React from 'react'
import { RegisterBg } from '../../assets'
import './detailBlog.scss'


const DetailBlog = () => {
  return (
    <div>
      <img className="img-cover" src={RegisterBg} alt="thumb"/>
      <p className='blog-title'>Title Blog</p>
      <p className='blog-author'>Author -Date Post Blog</p>
      <p className='blog-description'>Content Blog </p>
    </div>
  )
}

export default DetailBlog