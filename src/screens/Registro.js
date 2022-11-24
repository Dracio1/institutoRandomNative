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
import registrarse from '../controladores/registro'
import { ToggleDarkMode } from './../components';

const Registro = () => {

    

    const [nick, nickState] = useState('')
    const [contra, contraState] = useState('')
    const [contra2, contra2State] = useState('')
    const [email, emailState] = useState('')
    const [nombres, nombreState] = useState('')
    const [apellidos, apellidoState] = useState('')

    const [errores, erroresState] =  useState({})
    const validacionHorrible = ()=>{
        let error = {}
        if(nick.length < 3){
            error.usuario ='el usuario no puede tener menos de 3 caracteres'
        }
        if(contra.length < 6){
            error.contra = 'la contraseña no puede tener menos de 6 caracteres'
        }
        if(email){
            error.email ='el correo no puede ser vacío'
        }
        if(nombres){
            error.nombre = 'el nombre no puede ser vacío'
        }
        if(apellidos){
            error.apellido ='el apellido no puede ser vacío'
        }
        if(contra2 !== contra){
            error.contra2 = 'las contraseñas no coinciden'
        }

        erroresState(error)
        'contra' in errores? console.log('si'):console.log('no')
        return registrarse({ nick, nombres, apellidos, email, contra })
        
        
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
					<Heading size="lg">Este es el Registro</Heading>
                    
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
                    <FormControl>
                        <FormControl.Label>Repeat Password</FormControl.Label>
                        <Input type="password" placeholder="Repeat password" onChangeText={value=>contra2State(value)} isRequired isInvalid={'contra2' in errores}/>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Something is wrong.
                        </FormControl.ErrorMessage>
					</FormControl>
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input type="email" placeholder="Email" onChangeText={value=>emailState(value)} isRequired isInvalid={'email' in errores}/>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Something is wrong.
                        </FormControl.ErrorMessage>
					</FormControl>
                    <FormControl>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input type="text" placeholder="Your Name" onChangeText={value=>nombreState(value)} isRequired isInvalid={'contra' in errores}/>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Something is wrong.
                        </FormControl.ErrorMessage>
					</FormControl>
                    <FormControl>
                        <FormControl.Label>Surname</FormControl.Label>
                        <Input type="text" placeholder="Your Surname" onChangeText={value=>apellidoState(value)} isRequired isInvalid={'contra' in errores}/>
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

export default Registro;