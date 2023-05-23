import React from 'react'
import "../Components/Post.css"

function Post({Author, PostMessage, Caption}) {
  return(
    <div className='totaldiv'>
        <form>
          <h1>{Author}</h1>
          <h3>Message: {PostMessage}</h3>
          <h3>Caption: {Caption}</h3>
        </form>
    </div>
  );
}

export default Post