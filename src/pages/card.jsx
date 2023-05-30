import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://youridstore.com.br/media/catalog/product/cache/1/image/1200x/472321edac810f9b2465a359d8cdc0b5/2/4/245.jpg" />
      <Card.Body>
        <Card.Title>Camisa HIGH</Card.Title>
        <Card.Text>
            Camisa branca da HIGH
        </Card.Text>
        <Button variant="success" href='/produto1'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;