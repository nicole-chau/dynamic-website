import { useState } from 'react'
import { connect } from 'react-redux'

import { editPost, deletePost } from '../actions'

const EditPost = ({ setIsEditing, post, dispatchEditPost, dispatchDeletePost }) => {
  const {title, image, description, id} = post
  const [newTitle, setNewTitle] = useState(title)
  const [newImage, setNewImage] = useState(image)
  const [newDescription, setNewDescription] = useState(description)

  const handleSave = e => {
    e.preventDefault()
    setIsEditing(false)
    dispatchEditPost(newTitle, newImage, newDescription, id)
  }

  const handleDelete = e => {
    e.preventDefault()
    setIsEditing(false)
    dispatchDeletePost(id)
  }

  return (
    <>
        <h2>New Post</h2>
        <p>Title</p>
        <form onSubmit={handleSave}>
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
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
        <form onSubmit={handleDelete}>
          <button type="submit">DELETE POST</button>
        </form>
      </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (newTitle, newImage, newDescription, id) => dispatch(editPost(newTitle, newImage, newDescription, id)),
  dispatchDeletePost: id => dispatch(deletePost(id))
})

export default connect(null, mapDispatchToProps)(EditPost)