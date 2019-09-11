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
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default (AdditionalFeature);
