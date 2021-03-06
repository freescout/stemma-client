import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyleSheet, css } from 'aphrodite';

import "./App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Stemma from "../components/Stemma";
import AddIndividual from "../components/individuals/AddIndividual";
import Individuals from "../components/individuals/Individuals";
import Individual from "../components/individuals/individual/ShowIndividual";
import DeleteIndividual from "../components/individuals/DeleteIndividual";
import EditIndividual from "../components/individuals/EditIndividual";
import IndividualsList from "../components/individuals-list.component";
import Tree from "../components/Tree/Tree";
import AddPartner from '../components/individuals/AddPartner';

class App extends Component {
  render() {
    console.log("reached app");
    return (

        <Router>
          <div className={css(Styles.root)}>
            <Header className={css(Styles.header)} />
          
            {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a href="/individuals" className="navbar-brand">
                Stemma
            </a>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/individuals"} className="nav-link">
                    Individuals
                </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                    Add
                </Link>
                </li>
              </div>
            </nav> */}
          <div className={css(Styles.content)}>
              {this.renderRoute()}
            </div>

            <Footer></Footer>


              

          </div>        
        </Router>

    )
  }

  renderRoute() {
    return(
      <Switch>
        <Route exact path="/individuals" component={Individuals} />
        <Route exact path='/individuals/add' component={AddIndividual}/>
        <Route exact path='/individual/:id/partner'component={AddPartner}/>

        <Route exact path="/individual/edit/:id" component={EditIndividual} />
        <Route exact path="/individual/delete" component={DeleteIndividual} /> 
        <Route exact path="/individuals/:id" component={IndividualsList} />
        <Route exact path="/tree/:id" component={Tree} />
        <Route exact path="/individual/:id" component={Individual} />
        <Route exact path={'/'} component={Stemma} />
      </Switch>
    )
  }
}

export default App;

const Styles = StyleSheet.create({
  root: {
    background: '#EAE7DC',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 60, // for header
    //paddingBottom: 60, // for footer
    minHeight: 600, // TODO
    overflowX: 'hidden'
    //flex: '1 1 auto', // TODO
    //position: 'relative', //need this to position inner content
    //overflowY: 'auto'
  },
})
