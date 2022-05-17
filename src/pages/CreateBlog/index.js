import React from 'react'
import { Link , Input, Gap, Button, Upload, TextArea } from '../../components'
import './createBlog.scss'
import { useHistory } from 'react-router-dom'


const CreateBlog = () => {
  const history = useHistory()
  return (
    <div className="blog-post">
    <Link title="Kembali" onClick={() => history.push('/')} />
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