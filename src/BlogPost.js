import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function BlogPost({ match }) {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`https://codeweb-backend-server.onrender.com/blog/${(id)}`); // Use match.params.id to fetch specific blog post
        setBlog(response.data);
        
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };
    
    fetchBlogPost();
    
  }, [(id)]);

  if (!blog) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className="blog-post-container">
      
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogPost;
