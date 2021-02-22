import React, { useState } from 'react';
import IndividualService from '../../services/IndividualService';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';





const EditIndividual = props => {
  const [currentIndividual, setCurrentIndividual] = useState(props.individual);
  const [modifyDetails, setModifyDetails] = useState(null);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  

  const handleClose = () => setShow(false);

  const editIndividual = () => {
    IndividualService.update(currentIndividual.id, currentIndividual)
      .then(response => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const handleInputChange = event => {
    const { name, value } = event.target;
    setModifyDetails({ ...modifyDetails, [name]: value }
    )
    console.log("Curent indiv at edit", currentIndividual);

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
              {/* <label for="firstName" class="form-label">First Name</label> */}
              <input type="text" id="firstName" class="form-control" required placeholder={props.individual.name.firstName}   value={modifyDetails.firstName} onChange={handleInputChange} name='firstName' />
            </div>
{/*             <div class="col">
              <label for="middleName" class="form-label">Middle Name</label>
              <input type="text" id="middleName" class="form-control" placeholder="Middle Name" value={props.individual.name.middleName} onChange={handleInputChange} name='middleName' />
            </div>
            <div class="col">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" id="lastName" class="form-control" required placeholder="Last Name" value={props.individual.name.lastName} onChange={handleInputChange} name='lastName' />
            </div>
            <div class="col">
              <label for="lastName" class="form-label">Nick Name</label>
              <input type="text" id="nickName" class="form-control" placeholder="Nick Name" value={props.individual.name.nickName} onChange={handleInputChange} name='nickName' />
            </div> */}
          </div>
          
{/*           <div class="form-row mb-4">
            <div class="col">
              <input type="text" id="firstName" class="form-control" required placeholder="First name" value={props.individual.name.firstName} onChange={handleInputChange} name='firstName' />
            </div>
            <div class="col">
              <input type="text" id="middleName" class="form-control" placeholder="Middle Name" value={props.individual.name.middleName} onChange={handleInputChange} name='middleName' />
            </div>
            <div class="col">
              <input type="text" id="lastName" class="form-control" required placeholder="Last Name" value={props.individual.name.lastName} onChange={handleInputChange} name='lastName' />
            </div>
            <div class="col">
              <input type="text" id="nickName" class="form-control" placeholder="Nick Name" value={props.individual.name.nickName} onChange={handleInputChange} name='nickName' />
            </div>
          </div>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={searchName}
            >
              Search
          </button>
          </div> */}
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