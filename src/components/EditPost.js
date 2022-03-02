import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editPost, deletePost } from '../actions'

const EditPost = ({
  setIsEditing, post, dispatchEditPost, dispatchDeletePost,
}) => {
  const {
    title, image, description, id,
  } = post
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
    <div className="p-5">
      <p>Title</p>
      <form onSubmit={handleSave}>
        <input
          placeholder="Enter the title of the post"
          onChange={e => setNewTitle(e.target.value)}
          defaultValue={newTitle}
          className="block w-full p-2 my-2 border-2 rounded"
        />
        <p>Image</p>
        <input
          placeholder="Enter image url"
          onChange={e => setNewImage(e.target.value)}
          defaultValue={newImage}
          className="block w-full p-2 my-2 border-2 rounded"
        />
        <p>Description</p>
        <textarea
          placeholder="Enter description"
          onChange={e => setNewDescription(e.target.value)}
          defaultValue={newDescription}
          className="block w-full p-2 my-2 border-2 rounded"
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded mr-2">Save</button>
        <button type="button" onClick={() => setIsEditing(false)} className="bg-neutral-400 text-white p-2 rounded">Cancel</button>
      </form>
      <form onSubmit={handleDelete}>
        <button type="submit" className="bg-red-500 text-white p-2 rounded mt-2">DELETE POST</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (newTitle, newImage, newDescription, id) => dispatch(editPost(newTitle, newImage, newDescription, id)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(null, mapDispatchToProps)(EditPost)
