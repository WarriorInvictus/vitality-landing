import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        {/* <NavMenu /> */}
        <Container fluid className={ "mt-3" }>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
