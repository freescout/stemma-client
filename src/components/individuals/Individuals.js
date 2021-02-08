import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { PlusCircleFill, Trash, Pencil } from 'react-bootstrap-icons';

import IndividualService from '../../services/IndividualService';
import AddIndividual from './AddIndividual';
import Individual from './Individual';
import DeleteIndividual from './DeleteIndividual';

const Individuals = (props) => {
  const [searchDetails, setSearchDetails] = useState('');
  const [individuals, setIndividuals] = useState([]);
  const [currentIndividual, setCurrentIndividual] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  const [indivCardOpen, setIndivCardOpen] = useState(false);
  const [requestData, setRequestData] = useState(new Date());


  




  useEffect(() => {
    retrieveIndividuals();
  }, [requestData]);

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
                    <div className={css(Styles.ListTrash)}>
                      <div className={css(Styles.list)}>{individual.name.firstName} {individual.name.lastName}</div>
                      
                       
                      
                    </div>
                  </li>
                ))}
            </ul>
            <Link to={'/individuals/add'}>
              <div className={css(Styles.addIndiv)}><PlusCircleFill color="royalblue" size={30} /></div>
            </Link>
         </div>
         
        

        <div className={css(Styles.individualCardDiv)}> 
          {(currentIndividual && indivCardOpen) ?
            <Individual individual={currentIndividual} setRequestData={setRequestData}/> 
          : <div />}
        </div>
      </div>
    </div>
  )
}

export default Individuals;


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
    //justifyContent: 'flex-end'
  },
  ListTrash: {
    display: 'flex',
    //marginLeft: 30,
    
    justifyContent: 'space-between'
  },
  list: {

  },

  delete: {
   // marginLeft: 30,
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

