import { WARRANTIES_SET, SUBSCRIPTIONS_SET } from '../actions/actionTypes';


const initialState = {
    warranties: [],
    subscriptions: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case WARRANTIES_SET:
            return { ...state, warranties: action.payload }
        case SUBSCRIPTIONS_SET:
            return { ...state, subscriptions: action.payload }
        default:
            return state;
    }
}