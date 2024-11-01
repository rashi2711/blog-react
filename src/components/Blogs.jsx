import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider';
import Spinner from './Spinner';

const Blogs = () => {
  const {loading,posts}=useContext(AppContext);
  return (
    <div>{loading?(<Spinner/>):(posts.length===0?(<div><p>no post available</p></div>):(posts.map((post)=>(<div key={post.id}>
    <p>{post.title}</p>
    <p>By <span>{post.author}</span> on <span>{post.category}</span></p>
    <p>posted on {post.date}</p>
    <p>{post.content}</p>
    <div>
      {post.tags.map((tag,index)=>{
        return <span key={index}>{`#${tag}`}</span>
      })}
    </div>
    </div>))))}</div>
  )
}

export default Blogs