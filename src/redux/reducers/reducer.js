import {ADD_FEATURE} from '../actions/actions'
import { REMOVE_FEATURE } from '../actions/actions'

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};
  // assigning default value to state, loads info to initial state
export const reducer = (state = initialState, action) => {
    //the switch reads the action type
  switch(action.type) {

    case ADD_FEATURE: {
      return {
        ...state,
        car: {
          //access the information inside car
          // iterating over object
          ...state.car,
          //spread in anything within the features, iteration over array
            features: [...state.car.features, action.payload],
            price: state.car.price + action.payload.price
        }
      }
    }

    case REMOVE_FEATURE: {
      return {
        ...state,
        car: {
          //access the information inside car
          // iterating over object
          ...state.car,
          //filter creates new array for us
            features: state.car.features.filter(feature => {
              // 
             return feature.id !== action.payload.id
            }),
            price: state.car.price - action.payload.price
        }
      }
    }

    default: 
      return state;
  }
}