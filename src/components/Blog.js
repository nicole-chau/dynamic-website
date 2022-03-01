import { connect } from 'react-redux'

import NewPost from './NewPost'
import Post from './Post'

const Blog = ({ posts }) => {

  return(
    <>
      <h1>Blog Posts</h1>
      <NewPost />
      <br/>
      {posts.map(post => <Post key={post.id} post={post}/>)}
    </>
  )
}

const mapStateToProps = state => ({ posts: state.posts})

export default connect(mapStateToProps, null)(Blog)