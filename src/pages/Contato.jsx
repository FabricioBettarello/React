import ColorSchemesExample from "./ColorSchemesExample"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";

import Carousel from './carousel'

function Contato(){
    return(
        <div>
            <ColorSchemesExample/><br/>
            <Carousel/><br/>
        
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Nome:</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email:</InputGroup.Text>
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Telefone:</InputGroup.Text>
        <Form.Control
          placeholder="Telefone"
          aria-label="Telefone"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Assunto:</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup><br/>
      
      <Button variant="success">Enviar</Button>{' '}<br/><br/>

      <h5>
            Estamos aguardando seu contato!
            </h5><br/>

            <Footer/>   
        </div>
    )
}

export default Contato