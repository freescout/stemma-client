import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import Card from 'react-bootstrap/Card';
import { PlusCircleFill, Trash, Pencil } from 'react-bootstrap-icons';

import IndividualService from '../../services/IndividualService';

const Individual = props => {
  console.log("At Individual", props);
  let img = require('../../assets/images/pp.jpg');
  const deleteIndividual = () => {
    //console.log('Curent individual', props)
    IndividualService.remove(props.individual._id)
      .then(response => {
        console.log(response.data);
        props.setRequestData(new Date());
      })
      .catch(e => {
        console.log(e);
      })
  }
  return(
    <div>
       <Card className={css(Styles.individualCard)}>
        <Card.Img variant="top" src={img} />
          <Card.Body>
          <Card.Title>{props.individual.name.firstName}  {props.individual.name.lastName}</Card.Title>
          <Card.Subtitle>{props.individual.name.nickName}</Card.Subtitle>
           <Card.Text>
            <div className={css(Styles.deleteEdit)}>
              <Link to={'/individuals/edit'}>
                <div className={css(Styles.edit)}>
                  <Pencil />
                </div>
              </Link>
              <div className={css(Styles.delete)}>
                <Trash onClick={deleteIndividual}
                />
              </div>
            </div>
          </Card.Text>

        </Card.Body>


      </Card> 
    </div>
  )
}

export default Individual;

const Styles = StyleSheet.create({
  deleteEdit: {
    display: 'flex',
    justifyContent: 'space-between'
  },
})