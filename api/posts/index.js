import fetch from 'isomorphic-fetch'

export function getPosts () {
  return fetch('https://www.akceed.com/wp-json/wp/v2/posts')
}

export function getPost (slug) {
  return fetch(`https://www.akceed.com/wp-json/wp/v2/posts?title=${slug}`)
}
