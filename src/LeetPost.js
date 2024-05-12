
import Editor from '@monaco-editor/react';

import React, { useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function LeetPost({ match }) {
  const [leet, setLeet] = useState(null);
  const { id } = useParams();

  const editorRef = useRef()
  const [value, setValue] = useState('')

  const onMount = (editor) =>{
    editorRef.current =  editor;
    editor.focus()
}
  

  useEffect(() => {
    const fetchLeetPosts = async () => {
      try {
        const response = await axios.get(`https://codeweb-backend-server.onrender.com/leet/${(id)}`); // Use match.params.id to fetch specific blog post
        setLeet(response.data);
        
      } catch (error) {
        console.error('Error fetching Leet post:', error);
      }
    };
    
    fetchLeetPosts();
    
  }, [(id)]);

  if (!leet) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className="leet-post-container" style={{ textAlign: 'left', padding: '30px'}}>
      
      <h2>ID: #{leet.problem_id}</h2>
      <p style={{ fontWeight:'bold' }}>{leet.title}</p>
      <h5>Problem Statement:</h5>
      <p>{leet.problem_statement.split('\n').map((problem_statement, index) => (
        <span key={index}>
          {problem_statement}
          <br />
        </span>
      ))}</p>
      <h5>Examples:</h5>
      {leet.examples.map((example, index) => (
        <div key={index}>
          <h6>Example {index + 1}</h6>
          <p>Input: {JSON.stringify(example.input)}</p>
          <p>Output: {JSON.stringify(example.output)}</p>
        </div>
      ))}
      <h5>Constraints:</h5>
      <p>{leet.constraints.split('\n').map((constraint, index) => (
        <span key={index}>
          {constraint}
          <br />
        </span>
      ))}</p>
      <h5>Problem Solution:</h5>
      <p>{leet.problem_solution}</p>
      
      <h5>Code:</h5>
      
      <Editor
         height="90vh" 
         width= "98%"
         theme='vs-dark'
         defaultLanguage="cpp" 
         defaultValue={leet.problem_code}
         onMount={onMount}
         value={value}
         on onChange={
          (value, event) => setValue(value)
         }
     />
    </div>
  );
}


export default LeetPost;
