import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';


import { PlusCircleFill, Trash, Pencil } from 'react-bootstrap-icons';

import IndividualDataService from '../../../services/IndividualService';
import Card from '../../UI/Card';
// import EditIndividual from './EditIndividual';


const ShowIndividual = (props) => {
  const initialIndividualState = {
    id: null,
    name: {
      firstName: ''
    },
    birth: {
      date: ''
    }
  };
  const [currentIndividual, setCurrentIndividual] = useState(initialIndividualState);
  console.log('indivId', props.match.params.id);
  useEffect(() => {
    getIndividual(props.match.params.id);
  }, [props.match.params.id]);

  const getIndividual = id => {
    console.log('indivId at getIndivi', id);
    IndividualDataService.get(id)
      .then(response => {
        setCurrentIndividual(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  // var mydate = new Date('2014-04-03');
  // console.log(mydate.toDateString());
  const birthday = new Date(currentIndividual.birth.date);
  console.log("Birthday", birthday.toDateString());
  return(
    <div>
      <Card>
          <div>
            <div>Name: {currentIndividual.name.firstName} {currentIndividual.name.lastName}</div>
            <div>Birth: Born on {birthday.toDateString()} at {currentIndividual.birth.place}</div>

          </div>
      </Card>
    </div>
  )
}

export default ShowIndividual