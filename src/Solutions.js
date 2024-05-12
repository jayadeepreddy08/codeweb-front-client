import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import Card from 'react-bootstrap/Card'; // Import Card component from React Bootstrap
import './Blog.css';
import leetpic from './leetpic.jpg'

function Solutions() {
  const [leets, setLeets] = useState([]);
  
  useEffect(() => {
    fetchLeetPosts();
  }, []);

  const fetchLeetPosts = async () => {
    try {
      const response = await axios.get('https://codeweb-backend-server.onrender.com/leet');
      setLeets(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  return (
    <div className="blog-container" style={{overflow: 'hidden'}}>
      <h1>LeetCode Solutions</h1>
      <div className="background-image" style={{ backgroundImage: `url(${leetpic})` }}></div>
      <div className="blog-cards">
        {leets.map((leet) => (
          <Link to={`/leet/${leet._id}`} key={leet._id} style={{ textDecoration: 'none' }}> {/* Use Link component with dynamic route */}
            <Card className="blog-card" bg='light' border="secondary" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>#{leet.problem_id}.</Card.Title>
                <Card.Text>
                  {leet.title}
          </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
