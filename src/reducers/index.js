import { combineReducers } from "redux";
import alert from './alert'
import auth from './auth'
import personas from './personas'
import anuncios from './anuncios'
import carreras from './carreras'
import materias from './materias'


export default combineReducers({
    alert,
    auth,
    personas,
    anuncios,
    carreras,
    materias
})