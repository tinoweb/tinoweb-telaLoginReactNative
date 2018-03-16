import React from 'react';
import { Button } from 'react-native';
import { Text, TextInput, FormControl } from '../../styles'
import { Titulo, LoginWrapper } from './Login.style';

export default function Login(props){
    return (
        <LoginWrapper>
            <Titulo h4>Faça login para entrar</Titulo>
            <FormControl>
                <TextInput placeholder={'E-mail'} keyboardType={'email-address'}/>
            </FormControl>
            <FormControl>
                <TextInput placeholder={'Senha'} keyboardType={'default'} secureTextEntry/>
            </FormControl>
            <Button title={'Entrar'}/>
        </LoginWrapper>
    );
}