import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Card from 'react-bootstrap/Card';

const Death = (props) => {
  const initialDeathDetails = {
    dateOfDeath: '',
    placeOfDeath: ''
  };
  const [deathDetails, setDeathDetails] = useState(initialDeathDetails);
  useEffect(() => {
    props.onAddDeathDetails(deathDetails)
  }, [deathDetails])
  
  const handleInputChange = event => {
    const { name, value } = event.target;
    setDeathDetails({ ...deathDetails, [name]: value }
    )
  };

  return (
    <div>
      <Card style={{ width: '50rem' }} className={css(Styles.outerContainer)}>
        <Card.Body>

          <Card.Subtitle className="mb-2 text-muted">Death</Card.Subtitle>
          <div class="form-group row">
            <div class="col">
              <input class="form-control" type="date" value={deathDetails.dateOfDeath} id="dateofDeath" placeholder="Date of Death" onChange={handleInputChange} name='dateOfDeath' />
            </div>
            <div class="col">
              <input type="text" id="placeOfDeath" class="form-control" placeholder="Place" value={deathDetails.placeOfDeath} onChange={handleInputChange} name='placeOfDeath' />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Death;

const Styles = StyleSheet.create({
  outerContainer: {
    background: '#EAE7DC',
    width: '80%',

  },

})