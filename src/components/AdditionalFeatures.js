import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.propsStore.length ? (
        <ol type="1">
          {props.propsStore.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


const mapStateToProps = state =>{
  console.log('MSTP State:', state );
  return{
    propsStore: state.store
  }
}

export default connect(mapStateToProps, {}) (AdditionalFeatures);
