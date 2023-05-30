import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto3(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/385378/01/sv01/fnd/BRA/w/2000/h/2000/fmt/png"/>
                <Card.Body>
                <Card.Title>Tênis Suede Classic XXI</Card.Title>
                <Card.Text>
                <h2>R$ 449,90</h2>
                </Card.Text>
                <Card.Text>
                O modelo mais icônico da PUMA surgiu em 1968 e teve um impacto revolucionário na cultura sneaker. Desde então, já foi usado por ícones de todas as gerações. O tênis Suede Classic XXI traz cabedal em suede, entressola de borracha, palmilha ultra confortável e a consagrada faixa PUMA Formstrip nas laterais da silhueta low-rise.
                </Card.Text>
                <Card.Text>
                    Disponivel: 30
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto3