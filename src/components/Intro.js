import { useState } from 'react'
import { connect } from 'react-redux'

import { editIntro } from '../actions'

const Intro = ({ intro, dispatchEditIntro }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  return (
    <>
      <h1>Hey this is me!</h1>
      {!isEditing && 
      <> 
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <img src={image}/>
        <p>{description}</p> 
      </>}
      {isEditing && 
      // <form>
      <>
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
        <button onClick={() => (setIsEditing(false), dispatchEditIntro(image, description))}>Submit</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      {/* </form> */}
      </>
    }
    </>
  )
}

const mapStateToProps = state => ({ intro: state.intro})

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (image, description) => dispatch(editIntro(image, description))
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)