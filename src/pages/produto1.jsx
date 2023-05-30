import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto1(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://imgnike-a.akamaihd.net/768x768/02630351.jpg"/>
                <Card.Body>
                <Card.Title>Dunk Low Retro SE</Card.Title>
                <Card.Text>
                <h2>R$: 899,99</h2>
                </Card.Text>
                <Card.Text>
                Light Silver and Ocean Bliss
                </Card.Text>
                <Card.Text>
                    Disponivel: 7
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto1