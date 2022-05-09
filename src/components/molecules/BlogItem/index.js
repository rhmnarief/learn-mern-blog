import React from 'react';
import './blogItem.scss';
import { Button, Gap } from '../../atoms';


const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" alt="Post" />
            <div className="content-detail">
                <div className="title-wrapper">
                    <p className="title"></p>
                    <div className="edit-wrapper">
                        {/* <p className="edit" onClick={() => history.push(`/create-blog/${_id}`)}>Edit</p> | <p className="delete" onClick={() => onDelete(_id)}>Delete</p> */}
                    </div>
                </div>
                <p className="author"></p>
                <p className="body"></p>
                <Gap height={20} />
                {/* <Button title="View Detail" onClick={() => history.push(`/detail-blog/${_id}`)} /> */}
            </div>
        </div>
    )
}

export default BlogItem;
