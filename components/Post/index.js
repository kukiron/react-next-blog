import React from 'react'
import { Link } from 'routes'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
    <Link route='post' params={{ slug: post.slug }}>
      <a>
        <h3>{post.title.rendered}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: (post.content.rendered).substring(0, 400) + '....'
          }}
        />
      </a>
    </Link>
  </Wrapper>
)

export default PostItem
