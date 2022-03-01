import { connect } from 'react-redux'
import { useState } from 'react'

import { addPost } from '../actions'

const NewPost = ({ dispatchAddPost }) => {
  const [newPost, setNewPost] = useState(false)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  return(
    <>
      <button onClick={() => setNewPost(true)}>Add Posts</button>
      {newPost && 
      <>
        <h2>New Post</h2>
        <p>Title</p>
        <input
          placeholder="Enter the title of the post"
          onChange={e => setTitle(e.target.value)}
          defaultValue={title}
        />
        <p>Image</p>
        <input
          placeholder="Enter image url"
          onChange={e => setImage(e.target.value)}
          defaultValue={image}
        />
        <p>Description</p>
        <textarea
          placeholder="Enter description"
          onChange={e => setDescription(e.target.value)}
          defaultValue={description}
        />
        <button onClick={() => (setNewPost(false), dispatchAddPost(title, image, description))}>Save</button>
        <button onClick={() => setNewPost(false)}>Cancel</button>
      </>}
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, image, description) => dispatch(addPost(title, image, description))
})

export default connect(null, mapDispatchToProps)(NewPost)