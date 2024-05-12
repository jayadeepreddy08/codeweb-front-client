import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Tile1() {
  return (
    <Link to="/leet" style={{ textDecoration: 'none' }}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>LeetCode solutions</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to= "/solutions" style={{ textDecoration: 'none' }} >
        <Card.Text>LeetCode Solutions</Card.Text>
        </Link>
      </Card.Body>
    </Card>
    </Link>
  );
  
}
function Tile2() {
    return (
      <Link to="/blog" style={{ textDecoration: 'none' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Blog</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Find Articles on Networks and cybersecurity</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to= "/blog" style={{ textDecoration: 'none' }} >
          <Card.Text>Blog</Card.Text>
          </Link>
        </Card.Body>
      </Card>
      </Link>
    );
  }
export {Tile1, Tile2};