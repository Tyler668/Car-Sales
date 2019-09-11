import React from 'react';
import { connect } from 'react-redux';
import {addFeature} from '../actions'

const AdditionalFeature = props => {

  // const addFeature = e =>{
  //   console.log(e.target.value);
  //   props.featuresOnProps
  // }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.storeProps.name} (+{props.storeProps.price})
    </li>
  );
};


const mapStateToProps = state =>{
  console.log('MSTP State:', state.car.features );
  return{
    storeProps: state.store
  }
}

export default connect(mapStateToProps, {addFeature}) (AdditionalFeature);
