import React from 'react';
import {connect} from 'react-redux'
import {addFeature} from './redux/actions/actions'
import {removeFeature} from './redux/actions/actions'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  

  const removeItem = item => {
    // dispatch an action here to remove an item
    //d
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dispatch an action here to add an item
    props.addFeature(item)

  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeItem={removeItem} car={props.car}/>
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} store={props.store} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state)
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}
export default connect(mapStateToProps, {addFeature, removeFeature})(App);
