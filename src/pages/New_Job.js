import React from 'react'
import { Form, Button, Col, Row} from 'react-bootstrap';
import '../css/App.css';

const New_Job = () => {
    return (
    <>
      <div className = "Container_Job">
        <Form className = "Job_Form">

          <Form.Group className="mb-3" controlId="FormCathegory">
            <Form.Label>Categoria</Form.Label>
            <select className="form-select">
            <option>Default option</option>
            </select>
          </Form.Group>

          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Tipo
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Tiempo completo"
                  id="Fulltime"
                />
                <Form.Check
                  type="radio"
                  label="Medio tiempo"
                  id="Partime"
                />
                <Form.Check
                  type="radio"
                  label="Freelance"
                  id="Free"
                />
              </Col>
            </Form.Group>
          </fieldset>
          
          <Form.Group className="mb-3" controlId="FormCompany">
            <Form.Label>Compañia</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="FormURL">
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" placeholder="URL"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="FormPosition">
            <Form.Label>Posicion</Form.Label>
            <Form.Control type="text" placeholder="Posicion de la vacante"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="FormLocation">
            <Form.Label>Localizacion</Form.Label>
            <Form.Control type="text" placeholder="Localizacion de la compañia"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control as="textarea" rows={3}/>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

    </div>
    </>)
}

export default New_Job
