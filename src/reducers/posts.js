import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

const default_state = []

const posts = (state = default_state, action) => {
  const { type, title, image, description, id } = action

  switch(type) {
    case ADD_POST:
      return [...state, {title, image, description, id}]
    case EDIT_POST:
      return state.map(post => {
        if (post.id === id) {
          return { ...post, title: post.title, image: post.image, description: post.description }
        } else {
          return { ...post }
        }
      })
    case DELETE_POST:
      let idxCount = 0
      let idx = 0
      state.map(post => {
        idxCount++
        if (post.id === id) {
          idx = idxCount
          // return { ...post, title: post.title, image: post.image, description: post.description }
        // } else {
        //   return { ...post }
        }
      })

      return state.splice(idxCount, 1)
    default:
      return state
  }
}

export default posts
