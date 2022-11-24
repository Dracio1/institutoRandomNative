import React from "react";
import {
	Center,
	Heading,
	NativeBaseProvider,
	VStack,
	Button,
    FormControl,
    Input,
    Alert,
    WarningOutlineIcon,
    Box
} from "native-base";
import { useState } from "react";
import ingresar from '../controladores/login'

const Login = () => {

    

    const [nick, nickState] = useState('')
    const [contra, contraState] = useState('')

    const [errores, erroresState] =  useState({})
    const validacionHorrible = ()=>{
        let error = {}
        if(nick.length < 3){
            error.usuario ='el usuario no puede tener menos de 3 caracteres'
        }
        if(contra.length < 6){
            error.contra = 'la contraseña no puede tener menos de 6 caracteres'
        }

        erroresState(error)
        'contra' in errores? console.log('si'):console.log('no')
        return ingresar({ nick, contra })
        
        
    }



	return (
		<NativeBaseProvider>
			<Center
				_dark={{ bg: "blueGray.900" }}
				_light={{ bg: "blueGray.50" }}
				px={4}
				flex={1}
			>
				<VStack space={5} alignItems="center">
					<Heading size="lg">Este es el Login</Heading>
                    
                    <FormControl>
					    <FormControl.Label>Usuario</FormControl.Label>
                        <Input type="text" placeholder="Ej. Juanitoylosclonosaurios" onChangeText={(value)=>nickState(value)} isRequired isInvalid={'nick' in errores} />
                        {'nick' in errores ? 
                            <FormControl.ErrorMessage>
                                wep
                            </FormControl.ErrorMessage> :
                        <></> }
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" placeholder="password" onChangeText={value=>contraState(value)} isRequired isInvalid={'contra' in errores}/>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Something is wrong.
                        </FormControl.ErrorMessage>
					</FormControl>
                    
					<Button onPress={validacionHorrible}>Ingresar</Button>

				
				</VStack>
			</Center>
		</NativeBaseProvider>
	);
}

export default Login;