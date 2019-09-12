import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/index';

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


export const featureReducer = (state = initialState, action) => {
    console.log('action:', action)
    switch (action.type) {
        case ADD_FEATURE:
            console.log('Adding feature: ', action.payload);
            console.log('State:', state);
            return {
                ...state,
                additionalPrice:state.additionalPrice + action.payload.price,
               car: { ...state.car,
                    features: state.car.features.concat(action.payload)
                }
                // ,
                // store: state.store.splice((action.payload.id -1 ) , 1)

            }

            case REMOVE_FEATURE:
            return{
                ...state,
                additionalPrice:state.additionalPrice - action.payload.price,
                car:{ ...state.car,
                    features: state.car.features.filter( item =>
                   item.id !== action.payload.id
                )}, 
        }

        


        default: return state;
    }

}