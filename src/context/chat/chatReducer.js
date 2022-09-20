import { types } from "../../types/types";

export const chatReducer = ( state, action ) => {   
    switch (action.type) {                 
        case types.loadedUsers :
            return {
                ...state, 
                users: [ ...action.payload ]
            }  
        case types.setActiveChat:
            if ( state.activeChat === action.payload) return state;
            return {
                ...state, 
                activeChat:  action.payload,
                messages: []
            }  
        case types.newMessage: 
            if( state.activeChat !== action.payload.from &&
                state.activeChat !== action.payload.to ) return state;
            return {
                ...state,
                messages: [ ...state.messages, action.payload ]
            } 
        case types.loadingMessages:
            return {
                ...state,
                messages : [ ...action.payload ]
            }              
        default:
            return state;
    }
}