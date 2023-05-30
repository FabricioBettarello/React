import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card3() {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/d/h/dh0850-wqm-camisa-polo-lacoste-team-performance-medvedev-dh850-masc.jpg" />
      <Card.Body>
        <Card.Title>Camisa polo Lacoste</Card.Title>
        <Card.Text>
        Camisa Polo Lacoste Team Performance Medvedev DH850 Branca Marinho e Verde
        </Card.Text>
        <Button variant="success" href='/produto3'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3;