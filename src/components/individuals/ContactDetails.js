import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const ContactDetails = (props) => {
  const initialContactDetails = {
    address: '',
    email: '',
    phone: ''
  };
  const [contactDetails, setBasicDetails] = useState(initialContactDetails);

  useEffect(() => {
    props.onAddContactDetails(contactDetails)
  }, [contactDetails]) //add the state in dependency array and this useEffect will run whenever state changes//

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBasicDetails({ ...contactDetails, [name]: value }
    )
  };

  return (
    <Card style={{ width: '50rem' }} className={css(Styles.outerContainer)}>
      <Card.Body>
        <Card.Title>Add Individual</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Contact</Card.Subtitle>
        <Form>
          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="Enter Address" value={contactDetails.address} onChange={handleInputChange} name='address'/>
            <Form.Text className="text-muted">
              We'll never share your address with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="Enter Phone Number" value={contactDetails.phone} onChange={handleInputChange} name='phone'/>
            <Form.Text className="text-muted">
              We'll never share your Number with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={contactDetails.email} onChange={handleInputChange} name='email'/>
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