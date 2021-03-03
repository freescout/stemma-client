import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import Card from 'react-bootstrap/Card';
import { PlusCircleFill, Trash, Pencil } from 'react-bootstrap-icons';

import IndividualService from '../../services/IndividualService';
import EditIndividual from './EditIndividual';

const Individual = props => {
  let img = require('../../assets/images/pp.jpg');
  const [editable, setEditable] = useState(false);

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

  const editIndividual = () => {
    setEditable(true);
  }

  return(
    <div>
       <Card className={css(Styles.individualCard)}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{props.individual.name.firstName} {props.individual.middleName}  {props.individual.name.lastName}</Card.Title>
          <Card.Subtitle>{props.individual.name.nickName}</Card.Subtitle>
          <Card.Text>
            <div className={css(Styles.deleteEdit)}>
                <div className={css(Styles.edit)}>
                  <Pencil onClick={editIndividual}/>
                </div>

              <div className={css(Styles.delete)}>
                <Trash onClick={deleteIndividual}/>
              </div>
            </div>
          </Card.Text>
          <Card.Footer>
            <div className={css(Styles.buttonDiv)}>
              <Link to={'/individual/' + props.individual._id +'/parents'}><div className={css(Styles.buttons)}>Add Parents</div></Link>              
              <Link to={'/individual/' + props.individual._id + '/partner'}><div className={css(Styles.buttons)}>Add Partner/Ex</div></Link>
              <Link><div className={css(Styles.buttons)}>Add Children</div></Link>
            </div>
          </Card.Footer>
        </Card.Body>
      </Card> 
      <div class="col">
        {editable && <EditIndividual individual={props.individual} />}
      </div>
    </div>
  )
}

export default Individual;

const Styles = StyleSheet.create({
  deleteEdit: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  buttonDiv: {
    display: 'flex'
  },
  buttons: {
    backgroundColor: '#D8C3A5',
    margin: 2
  }
})