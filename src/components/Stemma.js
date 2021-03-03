import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import Card from '../components/UI/Card';


import IndividualDataService from '../services/IndividualService';


const Stemma = React.memo(props => {
  const [individuals, setIndividuals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [selectedIndividual, setSelectedIndividual] = useState('');
  const [inputFilter, setInputFilter] = useState(null);

  const inputRef = useRef();

  let img = require('../assets/images/tree1.jpg');

  useEffect(() => {
    const timer = setTimeout(() => { 


      console.log("Filter", inputFilter);
      console.log("Ref", inputRef.current.value);
      console.log(individuals.length);
      if (inputFilter === inputRef.current.value) {
        IndividualDataService.findByFirstName(inputFilter)
          .then(response => {
            console.log(response.data);
            setIndividuals(response.data);
          })
      }
    }, 500);
    return () => { // this return function will run when the useEffect function run the next time
      clearTimeout(timer); // clears old timer before atrting the new timer
    }
  }, [inputFilter, inputRef]);

  const setActiveIndividual = (individual, index) => {
    console.log("setActive Indiv", individual);
    setCurrentIndex(currentIndex);
    setSelectedIndividual(individual);
    console.log('selected Individual', selectedIndividual);
  };

  let show = null;

  if (individuals.length > 0 ) {
    console.log("Array length with indivs", individuals.length)
    show = <ShowCard/>
  }
  else if (individuals.length === 0) {
    show = <ShowWithoutCard/>
    console.log("Array length without indivs", individuals.length)
  }
  else show = <DontShow/>;

  function ShowCard() {
    return(
      <div>
        <p><b>Found {individuals.length} individuals </b></p>
            'If this not the person you are looking for, '
        <section className="result">
          <Card>
            {individuals &&
              individuals.map((individual, index) => (
                <div className={css(Styles.treeList)}>
                  <li
                    className={"list-group-item" + (index === currentIndex ? "active" : "")}
                    onClick={() => setActiveIndividual(individual, index)}
                    key={index}
                  >
                    {individual.name.firstName} {" "} {individual.name.lastName}
                    <Link to={'/tree/' + individual._id}>
                      <img className={css(Styles.treeImage)} src={img} alt='' />
                    </Link>
                  </li>
                </div>
              ))}
          </Card>
        </section>
      </div>
    )
  }

  function ShowWithoutCard() {
    return(
      'Person not found, '
    )
  }

  function DontShow() {
    return null;
  }
  
  return (
   
    <div className={css(Styles.stemma)}>
      <h2>Stemma</h2>
      <section className="introduction">       
        <p>Search for an individual</p>
      </section>
      <section className="search">
        <Card>
          <div className="search-input">
            <label>Search by Name</label>
            <input
              ref={inputRef}
              type="text"
              value={inputFilter}
              onChange={event => setInputFilter(event.target.value)}
            />
          </div>
        </Card>
      </section>
      

      {show}
      
      {/* {individuals.length > 0 ? 
        (
          <div>
            <p><b>Found {individuals.length} individuals </b></p>
            'If this not the person you are looking for, '
            <section className="result">
              <Card>
                {individuals &&
                  individuals.map((individual, index) => (
                    <div className={css(Styles.treeList)}>
                      <li
                        className={"list-group-item" + (index === currentIndex ? "active" : "")}
                        onClick={() => setActiveIndividual(individual, index)}
                        key={index}
                      >
                        {individual.name.firstName} {" "} {individual.name.lastName}
                        <Link to={'/tree/' + individual._id}>
                          <img className={css(Styles.treeImage)} src={img} alt='' />
                        </Link>
                      </li>
                    </div>
                  ))}
              </Card>
            </section>
          </div>
        ) : ('Person not found, ')} Add Individual
      
 */}
      <Link to={'/individuals/add'}>
        <div> <button> Add Individual </button>
         </div>

      </Link>
      
    </div>
  )
})

export default Stemma;

const Styles = StyleSheet.create({
  stemma: {
    width: '100%',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    background: '#EAE7DC',
  },

  treeList: {
    width: '100%',
    display: 'flex',
    //justifyContent: 'space-between'
  },
  treeImage: {
    textAlign: 'right'
  }

})

