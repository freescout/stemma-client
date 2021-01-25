import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import AddIndividual from './AddIndividual';
import DeleteIndividual from './DeleteIndividual';
import UpdateIndividual from './UpdateIndividual';

const Individual = () => {
  return(
    <div className={css(Styles.outerContainer)}>
      <div className={css(Styles.innerContainer)}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" className={css(Styles.tabs)} >
          <Row>
            <Col sm={2} className={css(Styles.col)}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className={css(Styles.item)}>
                  <Nav.Link eventKey="first" className={css(Styles.link)}>Add</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className={css(Styles.link)}>Update</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className={css(Styles.link)}>Delete</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <AddIndividual />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <UpdateIndividual />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <DeleteIndividual />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  )
}

export default Individual;

const Styles = StyleSheet.create({
  outerContainer: {
    background: '#EAE7DC',
   
    
  },
  innerContainer: {
    //background: '#D8C3A5',
    
  },
  tabs: {
    background: '#EAE7DC',
   border: 'white',
  
  },

  item: {

  }, 
  link: {
    background: 'brown'
  }

})