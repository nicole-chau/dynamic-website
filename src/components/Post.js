import { useState } from 'react'
import EditPost from './EditPost'

const Post = ({ post }) => {
  const {title, image, description, id} = post
  const [isEditing, setIsEditing] = useState(false)

  return(
    <div className="border-2 rounded">
      {!isEditing && 
      <>
        <img src={image} className="overflow-hidden w-full"/>
        <div className="p-5">
          <h3 className="text-xl font-bold my-2">Post #{id}: {title}</h3>
          <p>{description}</p>
          <button onClick={() => setIsEditing(true)} className="bg-blue-400 text-white p-2 rounded justify-self-end mt-4">Edit Post</button>
        </div>
      </>
      }
      {isEditing && <EditPost setIsEditing={setIsEditing} post={post}/>}
    </div>
  )
}

export default Post