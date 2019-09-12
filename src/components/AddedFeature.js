import React from 'react';
import { connect } from 'react-redux';
import {removeFeature} from '../actions/index';

const AddedFeature = props => {

  const removeThisFeature = (feature) => {
    console.log('Feature to be added:', feature);
    props.removeFeature(feature);
    // props.featuresOnProps
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {() => removeThisFeature(props.feature)}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state =>{
  console.log('MSTP State:', state );
  return{
    propsName: state.car.props 
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
