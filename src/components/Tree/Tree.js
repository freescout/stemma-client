import React, { useState, useEffect, useRef } from 'react';
import Card from '../UI/Card';

import IndividualDataService from '../../services/IndividualService';

const Tree = React.memo(props => {
  const initialIndividualState = {
    id: null,
    name: {
      firstName:''
    },

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
  return (
    <section className="search">
      <Card>
        <div className="treeIndiv">
          {currentIndividual.name.firstName}
        </div>
      </Card>
    </section>
  )
})

export default Tree;

