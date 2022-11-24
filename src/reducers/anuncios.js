import {
    GET_ANUNCIOS
    ,GET_ANUNCIO
    ,CLEAR_ANUNCIO
    ,ANUNCIOS_ERROR
    ,UPDATE_ANUNCIOS
    ,DELETE_ANUNCIOS
    ,ADD_ANUNCIOS
} from '../actions/types'

const inicialState= {
    anuncios:[]
    ,anuncio: null
    ,loading: true
    ,errors: {}
}


export default function (state = inicialState, action){
    const {type, payload} = action
    switch (type) {
        case UPDATE_ANUNCIOS:
        case GET_ANUNCIOS:
            return {
                ...state
                ,anuncios: payload,
                loading:false
            }
        
        case GET_ANUNCIO:
            return {
                ...state
                ,anuncio: payload,
                loading:false
            }

        case CLEAR_ANUNCIO:
            return inicialState
           
        case ANUNCIOS_ERROR:
            return {
                ...state
                ,errors: {},
                loading:false
            }
            
        case DELETE_ANUNCIOS:
            return {
                ...state
                ,anuncios: state.anuncios.filter
                (
                    item => item._id != payload
                ),
                loading:false
            }
            
        case ADD_ANUNCIOS:
            return {
                ...state
                ,anuncios: [payload,...state.anuncios]
                ,loading:false
            }

        default:
            return state;
    }

}