
export const ADD_FEATURE = 'ADD_FEATURE'
export const addFeature = feature =>{
    console.log('Actions Feature:',feature)
    return {type: ADD_FEATURE, payload: feature}
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const removeFeature = feature =>{
    console.log('Actions Feature:',feature)
    return {type: REMOVE_FEATURE, payload: feature}
}