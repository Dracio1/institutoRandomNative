import { REGISTER_SUCCESS, REGISTER_FAIL, 
    AUTH_ERROR,
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT
} from "../actions/types"; 

const initialState = {
    token: null,
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function(state = initialState, action){

    const {type, payload} = action

    switch(type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS: 
            
            return {
                token: payload.token,
                user: payload.user,
                isAuthenticated: true,
                loading: false
            }
            break;
        case AUTH_ERROR:  
        case LOGIN_FAIL:  
        case REGISTER_FAIL:
        case LOGOUT:
        case DELETE_ACCOUNT:         
            
            return {
                user:null,
                token: null,
                isAuthenticated: false,
                loading: false
            }
            break;
        
        default:
            return state        
    }
}
