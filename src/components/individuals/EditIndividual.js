import React, { useState } from 'react';
import IndividualService from '../../services/IndividualService';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';





const EditIndividual = props => {
  const initialModifyDetails = {
  
      firstName: '',
      middleName: '',
      lastName: '',
      nickName: '',

    gender: 'other'
  };
 
  const [currentIndividual, setCurrentIndividual] = useState(props.individual);
  const [modifyDetails, setModifyDetails] = useState('');
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  

  const handleClose = () => setShow(false);

  const editIndividual = () => {
    console.log("Indiv before modify", currentIndividual);
    IndividualService.update(currentIndividual._id, modifyDetails)
      .then(response => {
        console.log("Update Finished, data here",response.data);
        setMessage("The Individual was updated successfully!");
        setShow(false);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const handleInputChange = event => {
    const { name, value } = event.target;
    setModifyDetails({ ...modifyDetails, [name]: value }
    )
    
    console.log('Modify Details', modifyDetails);

  };


 

  return (
    <div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Individual</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-row mb-4">
            <div class="col">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" id="firstName" class="form-control" placeholder={currentIndividual.name.firstName} value={modifyDetails.firstName} onChange={handleInputChange} name='name.firstName' />
            </div>
            
            
  
            <div class="col">
              <label for="middleName" class="form-label">Middle Name</label>
              <input type="text" id="middleName" class="form-control" placeholder={currentIndividual.name.middleName} value={modifyDetails.middleName} onChange={handleInputChange} name='name.middleName' />
            </div>
            <div class="col">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" id="lastName" class="form-control" required placeholder={currentIndividual.name.lastName} value={modifyDetails.lastName} onChange={handleInputChange} name='name.lastName' />
            </div>
            <div class="col">
              <label for="lastName" class="form-label">Nick Name</label>
              <input type="text" id="nickName" class="form-control" placeholder={currentIndividual.name.nickName} value={modifyDetails.nickName} onChange={handleInputChange} name='name.nickName' />
            </div> 
          </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editIndividual}>Modify</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditIndividual;