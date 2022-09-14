import { types } from "../../types/types";

export const chatReducer = ( state, action ) => {   
    switch (action.type) {                 
        case types.loadedUsers :
            return {
                ...state, 
                users: [ ...action.payload ]
            }    
        default:
            return state;
    }
}