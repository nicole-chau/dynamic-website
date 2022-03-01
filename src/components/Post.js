import { useState } from 'react'
import { connect } from 'react-redux'

import { editPost, deletePost } from '../actions'

const Post = ({ post, dispatchEditPost, dispatchDeletePost }) => {
  const {title, image, description, id} = post
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const [newImage, setNewImage] = useState(image)
  const [newDescription, setNewDescription] = useState(description)

  return(
    <>
      {!isEditing && 
      <>
        <img src={newImage}/>
        <h3>Post #{id} {newTitle}</h3>
        <p>{newDescription}</p>
        <button onClick={() => setIsEditing(true)}>Edit Post</button>
      </>
      }
      {isEditing && 
      <>
        <h2>New Post</h2>
        <p>Title</p>
        <input
          placeholder="Enter the title of the post"
          onChange={e => setNewTitle(e.target.value)}
          defaultValue={newTitle}
        />
        <p>Image</p>
        <input
          placeholder="Enter image url"
          onChange={e => setNewImage(e.target.value)}
          defaultValue={newImage}
        />
        <p>Description</p>
        <textarea
          placeholder="Enter description"
          onChange={e => setNewDescription(e.target.value)}
          defaultValue={newDescription}
        />
        <button onClick={() => (setIsEditing(false), dispatchEditPost(title, image, description, id))}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
        <button onClick={() => setIsEditing(false), dispatchDeletePost(id)}>DELETE POST</button>
      </>}
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (newTitle, newImage, newDescription, id) => dispatch(editPost(newTitle, newImage, newDescription, id)),
  dispatchDeletePost: id => dispatch(deletePost(id))
})

export default connect(null, mapDispatchToProps)(Post)