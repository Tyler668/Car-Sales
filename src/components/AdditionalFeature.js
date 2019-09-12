import React from 'react';
import { connect } from 'react-redux';
import { addFeature, ADD_FEATURE } from '../actions'
import { createSourceMapSource } from 'typescript';

const AdditionalFeature = props => {

  const addThisFeature = (feature) => {
    console.log('Feature to be added:', feature);
    props.addFeature(feature);
    // props.featuresOnProps
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => addThisFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapStateToProps = state => {

  return {
    propsFeatures: state.features
  }
}
export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
