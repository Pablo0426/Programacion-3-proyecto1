import React from 'react'
import { Nav, Tab, Table, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="jobs">
          
          <div className="Container_busqueda">
          <div className="busqueda">
            <div>
              <input className="form-control txt" type="text"></input>
            </div>
            <div style={{marginRight: "10px"}}>
              <button className="btn btn-outline-primary" variant="outline-primary">Buscar</button>
            </div>
            <div>
              <button className="btn btn-primary btn-job" href="/src/pages/New_Job.js">post a job</button>
            </div>
          </div>
        </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Programacion</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Diseño</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="thrid">Mecanica</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Localizacion</th>
                        <th>Posicion</th>
                        <th>Empresa</th>
                      </tr>
                   </thead>
                   <tbody>
                      
                   </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Localizacion</th>
                      <th>Posicion</th>
                      <th>Empresa</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="thrid">
                <Table striped bordered hover variant="light">
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Localizacion</th>
                      <th>Posicion</th>
                      <th>Empresa</th>
                    </tr>
                  </thead>
                </Table>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
 
export default Home
