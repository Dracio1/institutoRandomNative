


const registrarse = ({ nick, nombres, apellidos, email, contra })  => {
  
    const headers= {'Content-Type':'application/json'}

    const body = JSON.stringify({nick, nombres, apellidos, email, password:contra})

   

    try {
       

        fetch('http://localhost:5000/api/users',{
            method:'post',
            body,
            headers
        })
        .then(res=>res.json())
        .then(respuesta=>{
            console.log(respuesta)
            if(respuesta == 'server error'){
                return 'no se por que, pero no te pudiste registrar'
            }
        })

        return 'si se registró'

    } catch (err) {

        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        
        
    }
}


export default registrarse