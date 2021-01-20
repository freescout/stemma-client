import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className={css(Styles.headerOuterContainer)}>
        <div className={css(Styles.headerInnerContainer)}>
          <div className={css(Styles.leftContainer)}>
            <div className={css(Styles.stemma)}>
              <Link to={'/'} className={css(Styles.link)}>
                <div >Stemma</div>
              </Link>
            </div>
          </div>
          <div className={css(Styles.middleContainer)}>
            <div className={css(Styles.individuals)}>
              <Link to={"/individuals/"} className={css(Styles.link)}>
                <div>Individuals</div>
              </Link> 
            </div>
            <div className={css(Styles.familyTree)}>
              <Link to={"/tree/"} className={css(Styles.link)}>
                <div>Family Tree</div>
              </Link> 
            </div>
          </div>
          <div className={css(Styles.rightContainer)}>
            <div className={css(Styles.search)}>
              <Link to={"/search/"} className={css(Styles.link)}>
                <div>Search</div>
              </Link> 
           </div>
           <div>
              <div className={css(Styles.login)}></div>
              <Link to={"/login"} className={css(Styles.link)}>
                <div className={css(Styles.stemmaIcon)}>Login</div>
              </Link> 
           </div>
          </div>
        </div>
        <div className={css(Styles.lineContainer)} />
      </div>
    )
  }
}

export default Header;
const Styles = StyleSheet.create({
  headerOuterContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: '#EAE7DC',
    alignItems: 'center',
    borderBottomColor: 'solid black'
  },
  headerInnerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    '@media (max-width: 767px)': {
      width: '90%',
    }
  },
  leftContainer: {
    
  },
  middleContainer: {
    display: 'flex',
    justifyContent: 'space-around'


  },
  lineContainer: {
    borderBottom: '1px solid grey',
    width: '100%',
    marginBottom: 20,
  },
  stemma: {
    margin: 10
  },
  individuals: {
    margin: 10
  },
  familyTree: {
    margin: 10,
  },
  rightContainer: {
    display: 'flex',

  },
  login: {
    margin: 10
  },
  search: {
    margin: 10
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: 18,
    ':hover': {
      color: '#c00',
    },
  },
  dummyDiv: {
    display: 'flex',
    flex: 1,
  },
})

