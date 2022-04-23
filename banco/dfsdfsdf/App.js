import React from 'react'
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import GetCampos from './Campos'

const TelaInicial = () => {
    return (
        <View style={style.background}>
            <Image
                source={require('./src/img/logo.jpg')}
                style={style.img}
                placeholder='center'
            />
            
            <TextInput
                style={style.input}
                placeholder='Usuaria'
                autoCorrect={false}
                onChangeText={()=>{}}>
            </TextInput>
            <TextInput
                style={style.input}
                placeholder='Senha'
                autoCorrect={false}
                onChangeText={()=>{}}>
            </TextInput>
            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
};
const style = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191919'
    },
    img:{
        width: '80%',
        height: '20%'
    },
    input:{
        width: 200,
        margin: 10,
        height: 5,
        backgroundColor: '#FFFF',
        justifyContent: 'center'
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 20
    }
});
export default TelaInicial;