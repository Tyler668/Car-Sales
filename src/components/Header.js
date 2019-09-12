import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.propsCar.image} alt={props.propsCar.name} />
      </figure>
      <h2>{props.propsCar.name}</h2>
      <p>Amount: ${props.propsCar.price}</p>
    </>
  );
};

const mapStateToProps = state =>{
  return{
    propsCar: state.car   
  }
}

export default connect(mapStateToProps, {})(Header);
