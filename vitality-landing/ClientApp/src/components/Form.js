import React from "react";
import { Form, Card, Row, Button, Col } from "react-bootstrap";
import Container from "reactstrap/lib/Container";
import axios from 'axios';



const EmailForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        axios.post('http:localhost:44344/Create')
    }

  return (
    <Container>
    <Row>

      <Card className={"shadow p-3 my-3 col-md-7"}>
        <Form method="post" action="/Home/FormsTestPost">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Jane Doe" name="UserName"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="773-123-4567" name="phone"/>
          </Form.Group>
          <Form.Group className="mb-3"> 
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" name="email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
              
            </Form.Group>
                      <Button variant="primary" type="submit" >
    Submit
  </Button>
        </Form>
        </Card>
        <Col className={'col-5 p-3'}>
          <p>Get in contact with us by shooting us a short message</p>
    </Col>
      </Row>
      </Container>
  );
};

export default EmailForm;
