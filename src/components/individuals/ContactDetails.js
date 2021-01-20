import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const ContactDetails = () => {
  return (
    <Card style={{ width: '50rem' }} className={css(Styles.outerContainer)}>
      <Card.Body>
        <Card.Title>Add Individual</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Contact</Card.Subtitle>
        <Form>
          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="Enter Address" />
            <Form.Text className="text-muted">
              We'll never share your address with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="Enter Phone Number" />
            <Form.Text className="text-muted">
              We'll never share your Number with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  )
}


export default ContactDetails;

const Styles = StyleSheet.create({
  outerContainer: {
    background: '#EAE7DC',
    width: '80%',

  },

})