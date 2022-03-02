import { EDIT_INTRO } from '../actions'

const default_input = {}

const intro = (input = default_input, action) => {
  const { type, image, description } = action
  switch (type) {
    case EDIT_INTRO:
      return { image, description }
    default:
      return input
  }
}

export default intro
