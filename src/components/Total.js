import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.propsPrice + props.addPrice}</h4>
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    propsPrice: state.car.price,
    addPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(Total);
