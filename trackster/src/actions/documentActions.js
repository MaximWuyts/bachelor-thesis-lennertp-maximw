import { WARRANTIES_SET, SUBSCRIPTIONS_SET } from '../actions/actionTypes';

export const setWarranties = (warranties) => {
    return {
        type: WARRANTIES_SET,
        payload: warranties
    }
};

export const setSubscriptions = (subscriptions) => {
    return {
        type: SUBSCRIPTIONS_SET,
        payload: subscriptions
    }
};