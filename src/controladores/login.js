const ingresar = ({nick,contra})=>{

    const body =  JSON.stringify({nick, password:contra})
    console.log(body)
    const headers= {'Content-Type':'application/json'}
    try {
        fetch('http://localhost:5000/api/auth',{
            method:'post',
            body,
            headers
        })
        .then(res=>res.json())
        .then(respuesta=>{
            
            if(respuesta == 'server error'){
                return 'no se por que, pero no te pudiste ingresar'
            }
            dispatch({type:LOGIN_SUCCESS,
                    payload:res.data})
        })
        dispatch(getPersona())
        
        return 'si se ingresó'

    } catch (err) {

        const errors = err.response.data.errors

        //if(errors){
        //    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        //}
        
        
    }

}

export default ingresar