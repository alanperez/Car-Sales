export const ADD_FEATURE = 'ADD_FEATURE'
       // action creator
export const addFeature = (newFeature) => {
  return{
    type: ADD_FEATURE,
    payload: newFeature
  }
}