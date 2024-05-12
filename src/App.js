import {Route, Routes} from 'react-router-dom';
import './App.css';
import NavHead from './Navbar';
import Home from './Home';
import Blog from './Blog';
import Solutions from './Solutions';
import BlogPost from './BlogPost';
import LeetPost from './LeetPost';
import About from './Aboutme';
import Contact from './Contactme';



function App() {
  
  
  return (
    
    <div className="App">
      
      {/*<header className="App-header">
        
      </header>
      */}
      <NavHead />
      {/*
      <div className='first'>
        <div className='intro'>
          <h1>Hello!</h1>
          <h4>Just a developer finding his repo!!</h4>
          <p>Find my solutions for LeetCode problems and useful articles on networks and cybersecurity</p>
          
        </div>
        <Blob />
        <div className='intro_img'>
        <img src={pic} alt="pic" className='profile-photo'/>
        </div>
      </div>
      <div className='tile-container'>
        <div className="tile"> 
          <Tile1 />
        </div>
        <div className="tile"> 
        <Link to="/blog"> <Tile2 /></Link>
        </div>
      </div>*/}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/:id" element={<BlogPost />}  />
        
        <Route exact path="/leet" element={<Solutions />} />
        <Route exact path="/leet/:id" element={<LeetPost />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes  >
      
      
    </div>
    
  );
}

export default App;
