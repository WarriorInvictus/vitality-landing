import React, { Component } from "react";
import { Jumbotron, Image, Card, Row, Col, Container, Navbar } from "react-bootstrap";
import banner from "../assets/images/Warrior-Invictus.jpg";
import logo from "../assets/images/Vitality_Agency_logo.jpg";
import Form from "../components/Form";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
      <Container>
        <Jumbotron className={"shadow"}>
          <Image src={banner} fluid className={"shadow"} />
        </Jumbotron>
        <Card className={"p-3 shadow"}>
          <Container>
            <Row>
              <Col
                md={4}
                className={"d-flex align-items-center justify-content-center"}
              >
                <Card.Img src={logo} fluid />
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <div>
                  <h2>
                    Wellness Invictus: Technology & Account Management
                    Distribution Partner for Vitality Group Corporate Wellness
                    Platform to Mid-Market Employer Groups in the US.
                  </h2>
                  <p>
                    If you would like more information, please contact us at{" "}
                    <a href="tel:6302057083">630-205-7083</a> or provide your
                    contact information and we will reach out to you.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Card>

        <Form />

        </Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <hr />
            <Navbar.Brand href="#"><small>© 2021 Warrior Invictus Holding Company, Inc.</small></Navbar.Brand>
          </Container>
        </Navbar>
        </>
    );
  }
}
