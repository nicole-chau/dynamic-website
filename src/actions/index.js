export const EDIT_INTRO = 'EDIT_INTRO'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

let id = 0

export const editIntro = (image, description) => ({
  type: EDIT_INTRO,
  image,
  description
})

export const addPost = (title, image, description) => ({
  type: ADD_POST,
  title,
  image,
  description,
  id: id++
})

export const editPost = (title, image, description, id) => ({
  type: EDIT_POST,
  title,
  image,
  description,
  id
})

export const deletePost = id => ({
  type: DELETE_POST,
  id
})