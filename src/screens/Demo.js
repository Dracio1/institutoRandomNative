import React from "react";
import {
  Center,
  Heading,
  NativeBaseProvider,
  VStack
} from "native-base";
import {Text} from 'react-native'
import {TextNoe} from '../components/style'

const Demo = () => {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Heading size="lg">Página de prueba...</Heading>
          <Text style = {TextNoe.rojo}>wuenas</Text>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

export default Demo;