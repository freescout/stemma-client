import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyleSheet, css } from 'aphrodite';

import "./App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AddIndividual from "../components/individuals/AddIndividual";
import Individual from "../components/individuals/Individual";
import DeleteIndividual from "../components/individuals/DeleteIndividual";
import UpdateIndividual from "../components/individuals/UpdateIndividual";
import IndividualsList from "../components/individuals-list.component";
import Tree from "../components/Tree";

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
            <div>
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
        <Route exact path="/individuals" component={Individual} />
{/*         <Route exact path="/individuals/add" component={AddIndividual} />
        <Route exact path="/individuals/modify" component={UpdateIndividual} />
        <Route exact path="/individuals/delete" component={DeleteIndividual} /> */}
        <Route exact path="/individuals/:id" component={IndividualsList} />
        <Route exact path="/tree" component={Tree} />
      </Switch>
    )
  }
}

export default App;

const Styles = StyleSheet.create({

})
