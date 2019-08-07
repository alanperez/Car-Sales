import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log('remove FEATURES: ', props)
  console.log(props.removeItem)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature  removeItem={props.removeItem} key={item.id} feature={item}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
