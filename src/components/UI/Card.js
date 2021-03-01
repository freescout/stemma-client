import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const Card = props => {
  return <div className={css(Styles.card)}>{props.children}</div>;
};

export default Card;

const Styles = StyleSheet.create({
  card: {
    padding: '1rem',
    borderRadius: '5px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)'
  }

})