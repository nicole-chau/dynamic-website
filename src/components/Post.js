import { useState } from 'react'
import { connect } from 'react-redux'

import { editPost, deletePost } from '../actions'

import EditPost from './EditPost'

const Post = ({ post }) => {
  const {title, image, description, id} = post
  const [isEditing, setIsEditing] = useState(false)

  return(
    <>
      {!isEditing && 
      <>
        <img src={image}/>
        <h3>Post #{id} {title}</h3>
        <p>{description}</p>
        <button onClick={() => setIsEditing(true)}>Edit Post</button>
      </>
      }
      {isEditing && <EditPost setIsEditing={setIsEditing} post={post}/>}
    </>
  )
}

export default Post