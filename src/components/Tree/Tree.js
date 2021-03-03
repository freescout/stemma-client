import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';
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
    <div className={css(Styles.tree)}>
      <div className={css(Styles.gen1)}>
        Parents
      </div>
      <div className={css(Styles.gen2)}>
        <Card>
          <div className="treeIndiv">
            {currentIndividual.name.firstName} {currentIndividual.name.lastName}
          </div>
        </Card>
      </div>
      <div className={css(Styles.gen3)}>
        Children
      </div>

    </div>
   
  )
})

export default Tree;

const Styles = StyleSheet.create({



})
