import React from 'react'
import styled from 'styled-components'
import Layout from 'layouts/Main'
import { getPost } from 'api/posts'

const Wrapper = styled.div`
  padding: 3rem;
  max-width: 750px;
  margin: 0 auto;

  @media (max-width: 750px) {
    width: 100%;
    padding: 1rem;
  }

  h1 {
    color: #222;
    font-weight: 300;
    font-size: 1.75rem;
    line-height: 35px;
    font-family: Arial, sans-serif;
    text-transform: capitalize;
    margin: 0;
  }

  p {
    line-height: 28px;
    font-weight: 300;
    color: #666;
    font-family: Arial, sans-serif;
  }
`

const PostPage = ({ post }) =>
  <Layout>
    <Wrapper>
      <h1>
        {post.title.rendered}
      </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content.rendered
        }}
      />
    </Wrapper>
  </Layout>

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug)
  const json = await res.json()
  return { post: json[0] }
}

export default PostPage
