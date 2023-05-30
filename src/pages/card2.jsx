import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2() {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/bergally/catalog/vestuario/moletom-masculino/nike-classic/nike-classico.JPG" />
      <Card.Body>
        <Card.Title>NMoletom Nike</Card.Title>
        <Card.Text>
        Moletom preto da nike
        </Card.Text>
        <Button variant="success" href='/produto2'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;