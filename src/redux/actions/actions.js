export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'
// action creator
export const addFeature = (newFeature) => {
  return{
    type: ADD_FEATURE,
    payload: newFeature
  }
}

export const removeFeature = (newFeature) => {
  return {
    type: REMOVE_FEATURE,
    payload: newFeature
  }
}