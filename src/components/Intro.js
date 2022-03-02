import { useState } from 'react'
import { connect } from 'react-redux'

import { editIntro } from '../actions'

const Intro = ({ intro, dispatchEditIntro }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="mb-20">
      <div className="grid grid-cols-2 gap-4">
        <h1 className="text-4xl font-bold">Hey this is me!</h1>
        {!isEditing && 
        <> 
          <button onClick={() => setIsEditing(true)} className="bg-blue-400 text-white p-2 rounded justify-self-end">Edit</button>
          <img src={image} className="justify-self-end max-w-sm"/>
          <p className="text-lg pl-10">{description}</p> 
        </>}
      </div>
      {isEditing && 
      <div className="my-10">
        <p>Image</p>
        <input
          placeholder="Enter image url"
          onChange={e => setImage(e.target.value)}
          defaultValue={image}
          className="block w-full p-2 my-4 border-2 rounded"
        />
        <p>Description</p>
        <textarea
          placeholder="Enter description"
          onChange={e => setDescription(e.target.value)}
          defaultValue={description}
          className="block w-full p-2 my-4 border-2 rounded"
        />
        <button onClick={() => (setIsEditing(false), dispatchEditIntro(image, description))} className="bg-green-600 text-white p-2 mr-2 rounded">Submit</button>
        <button onClick={() => setIsEditing(false)} className="bg-neutral-400 text-white p-2 rounded">Cancel</button>
      </div>
    }
    </div>
  )
}

const mapStateToProps = state => ({ intro: state.intro})

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (image, description) => dispatch(editIntro(image, description))
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)