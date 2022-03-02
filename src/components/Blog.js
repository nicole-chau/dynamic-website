import { connect } from 'react-redux'

import NewPost from './NewPost'
import Post from './Post'

const Blog = ({ posts }) => {

  return(
    <>
      <NewPost />
      <br/>
      <div className="grid grid-cols-3 gap-4 my-6">
      {posts.map(post => <Post key={post.id} post={post}/>)}
      </div>
    </>
  )
}

const mapStateToProps = state => ({ posts: state.posts})

export default connect(mapStateToProps, null)(Blog)