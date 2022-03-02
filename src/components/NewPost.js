import React, { connect } from 'react-redux'
import { useState } from 'react'

import { addPost } from '../actions'

const NewPost = ({ dispatchAddPost }) => {
  const [newPost, setNewPost] = useState(false)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const handleSave = e => {
    e.preventDefault()
    setNewPost(false)
    dispatchAddPost(title, image, description)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 my-4">
        <h1 className="text-4xl font-bold">Blog Posts</h1>
        <button type="button" onClick={() => setNewPost(true)} className="bg-blue-400 text-white p-2 rounded justify-self-end">Add Post</button>
      </div>
      {newPost
      && (
      <>
        <h2 className="text-2xl font-bold">New Post</h2>
        <p>Title</p>
        <input
          placeholder="Enter the title of the post"
          onChange={e => setTitle(e.target.value)}
          defaultValue={title}
          className="block w-full p-2 my-2 border-2 rounded"
        />
        <p>Image</p>
        <input
          placeholder="Enter image url"
          onChange={e => setImage(e.target.value)}
          defaultValue={image}
          className="block w-full p-2 my-2 border-2 rounded"
        />
        <p>Description</p>
        <textarea
          placeholder="Enter description"
          onChange={e => setDescription(e.target.value)}
          defaultValue={description}
          className="block w-full p-2 my-2 border-2 rounded"
        />
        <button type="submit" onClick={handleSave} className="bg-green-600 text-white p-2 rounded mr-2 mt-2">Save</button>
        <button type="submit" onClick={() => setNewPost(false)} className="bg-neutral-400 text-white p-2 rounded mt-2">Cancel</button>
      </>
      )}
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, image, description) => dispatch(addPost(title, image, description)),
})

export default connect(null, mapDispatchToProps)(NewPost)
