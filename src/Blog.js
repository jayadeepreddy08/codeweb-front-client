import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import Card from 'react-bootstrap/Card'; // Import Card component from React Bootstrap
import './Blog.css';
import blogpic from './blogpic.jpg'

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get('https://codeweb-backend-server.onrender.com/blog');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  return (
    <div className="blog-container" >
      <h1>Blog</h1>
      <div className="background-image" style={{ backgroundImage: `url(${blogpic})` }}></div>
      <div className="blog-cards" >
        {blogs.map((blog) => (
          <Link to={`/blog/${blog._id}`} key={blog._id} style={{ textDecoration: 'none' }}> {/* Use Link component with dynamic route */}
            <Card className="blog-card" bg='light' border="secondary" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
