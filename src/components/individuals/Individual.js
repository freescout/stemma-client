import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { PlusCircleFill } from 'react-bootstrap-icons';

import IndividualService from '../../services/IndividualService';
import AddIndividual from './AddIndividual';

const Individual = () => {
  const [searchDetails, setSearchDetails] = useState('');
  const [individuals, setIndividuals] = useState([]);
  const [currentIndividual, setCurrentIndividual] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  const [indivCardOpen, setIndivCardOpen] = useState(false);


  let img = require('../../assets/images/pp.jpg');




  useEffect(() => {
    retrieveIndividuals();
  }, []);

  const retrieveIndividuals = () => {
    IndividualService.getAll()
      .then(response => {
        setIndividuals(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setActiveIndividual = (individual, index) => {
    setCurrentIndividual(individual);
    setCurrentIndex(index);
    setIndivCardOpen(true);
  };
  const handleInputChange = event => {
    const { name, value } = event.target;
    setSearchDetails({ ...searchDetails, [name]: value }
    )
  };
  return (
    <div className={css(Styles.outerContainer)}>
      <div className={css(Styles.searchIndiv)}>
        <Form>
          <Form.Group controlId="formGridAddress1">
            <Form.Control placeholder="Search Individuals" />
          </Form.Group>
        </Form>
      </div>
      <div className={css(Styles.individualListCardDiv)}>
        <div className={css(Styles.individualListDiv)}>
          <h4>Individuals List</h4>

          <ul className="list-group">
            {individuals &&
              individuals.map((individual, index) => (
                <li
                  className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveIndividual(individual, index)}
                  key={index}
                >
                  {individual.name.firstName} {individual.name.lastName}
                </li>
              ))}
          </ul>
          <Link to={'/individuals/add'}>
            <div className={css(Styles.addIndiv)}><PlusCircleFill color="royalblue" size={30} /></div>
          </Link>
          
        </div>

        <div className={css(Styles.individualCardDiv)}> 
          {(currentIndividual && indivCardOpen) ?
            <Card className={css(Styles.individualCard)}>
              <Card.Img variant="top" src={img} roundedCircle />
              <Card.Body>
                <Card.Title>{currentIndividual.name.firstName}  {currentIndividual.name.lastName}</Card.Title>
                <Card.Subtitle>{currentIndividual.name.nickName}</Card.Subtitle>
                <Card.Text>
                  
                </Card.Text>
                
              </Card.Body>
              

            </Card> : <div />}
        </div>
      </div>
    </div>
  )
}

export default Individual;


const Styles = StyleSheet.create({
  outerContainer: {
    background: '#EAE7DC',
    width: '80%',
    display: 'flex',
    flexDirection: 'column'

  },
  searchIndiv: {

  },
  individualListCardDiv: {
    display: 'flex',
  },
  individualListDiv: {
    width: '70%',
  },

  addIndiv: {
    textAlign: 'right',
    marginTop: 10
  },
  individualCardDiv: {
   width: '25%',
    //marginLeft: 50,
  },

})

