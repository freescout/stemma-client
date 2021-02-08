import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import IndividualDataService from '../../services/IndividualService';
import BasicDetails from './BasicDetails';
import EventDetails from './EventDetails';
import ContactDetails from './ContactDetails';
import AddPartner from './AddPartner';
const AddIndividual = () => {
  const initialIndividualState = {
    basicDetails: '',
    eventDetails: '',
    contactDetails: ''
  };
  const [individual, setIndividual] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [addPartner, setAddPartner] = useState(false);

  const addBasicDetailsHandler = (...props) => {
    let newIndiv = {
      ...individual, ...props[0]
    };
    setIndividual(newIndiv);
  }
  const addEventDetailsHandler = (...props) => {
    setIndividual({
      ...individual, ...props[0]
    })
  }

  const addContactDetailsHandler = (...props) => {
    setIndividual({
      ...individual, ...props[0]
    })
  }
  const saveIndividual = () => {

    /*     var data = {
          basicDetails: individual.basicDetails,
          eventDetails: individual.eventDetails
        };  */
    console.log("Data Details at save", individual);
    IndividualDataService.create(individual)
      .then(response => {
        setIndividual({
          id: response.data._id,
          name: response.data.name,
          gender: response.data.gender
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newIndividual = () => {
    setIndividual(null);
    setSubmitted(false);
    setAddPartner(false);
  };

  const newPartner = () => {
    setAddPartner(true);
    console.log("new partner", addPartner);
  }

  return (
    <div className={css(Styles.outerContainer)}>
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <h4>Add Partner/Children</h4>
            <button className="btn btn-success" onClick={newPartner}>
              Add Partner
            </button>
            <button className="btn btn-success" onClick={newIndividual}>
              Cancel
          </button>
          </div>
        ) : (
            <div>
              <div className="form-group">
                <h3>Add Individual</h3>
                <BasicDetails onAddBasicDetails={addBasicDetailsHandler} />
                <EventDetails onAddEventDetails={addEventDetailsHandler} />
                <ContactDetails onAddContactDetails={addContactDetailsHandler} />
                <button onClick={saveIndividual} className="btn btn-success">
                  Submit
              </button>
              </div>
              
                {addPartner ? ( 
                  <AddPartner indivId={individual.id}/>
                ) : null 
              }
                
              

            </div>
          )}
      </div>

    </div>
  );
};

export default AddIndividual;

const Styles = StyleSheet.create({
  outerContainer: {
    background: '#EAE7DC',
    width: '80%',

  },

})