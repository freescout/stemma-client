import React, { useState, useEffect } from 'react';
import IndividualService from '../../services/IndividualService';

const DeleteIndividual  = props => {
  const [ currentIndividual, setCurrentIndividual] = useState('');

  const deleteIndividual = (props) => {
    
    IndividualService.remove(currentIndividual.id)
      .then(response => {
        console.log(response.data);
        props.history.push('/individuals');
      })
      .catch(e => {
        console.log(e);
      })
  }

  
  return(
    <div> Delete Individual</div>
  )
}

export default DeleteIndividual;