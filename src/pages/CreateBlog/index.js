import React from 'react'
import { Link , Input, Gap, Button, Upload, TextArea } from '../../components'
import './createBlog.scss'

const CreateBlog = () => {
  return (
    <div className="blog-post">
    <Link title="Kembali" />
    <p className="title">Create Blog Post</p>
    <Input label="Post Title" />
    <Upload />
    <TextArea />
    <Gap height={20} />
    <div className="button-action">
        <Button title='Simpan'  />
    </div>
</div>
  )
}

export default CreateBlog