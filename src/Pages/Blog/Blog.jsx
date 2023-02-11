import React from 'react'
import { useAuth } from '../../Context/auth'

const Blog = () => {

    const [auth,setAuth]=useAuth()

  return (
    <div><h1>Blog </h1>
    <pre>{JSON.stringify(auth,null,4)}</pre>
    </div>
  )
}

export default Blog