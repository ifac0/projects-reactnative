import React, {useState} from 'react'
import styled from 'styled-components';
import {MaterialIcons} from '@expo/vector-icons';
import 'intl';
import "intl/locale-data/jsonp/en";

import Text from '../components/Text';
import NumberPad from '../components/NumberPad';

import global from '../styles/global';

export default function SeendRequestScreen() {
    const [amount, setAmount] = useState('0');
    
    const pressKey = (item, index) => {
        setAmount(prev => {
            return index != 10 ? prev + item : prev.slice(0, prev.lengt - 1);
        })
    }

    return (
        <Container backgroundColor={global.background}>
            <Text center large heavy margin="16px 0 0 0"> Transferência </Text>

            <Amount>
                <Text title heavy>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL' }).format(amount)
                    }
                </Text>
                <Text bold color={global.textSecondary}>Escolhar o valor para enviar</Text>
            </Amount>

            <User>
                <ProfilePhoto source={require('../../assets/profilePhoto.jpg')}/>
                <UserDetails>
                    <Text medium heavy>Felipe</Text>
                    <Text bold color={global.textSecondary}>IFCorpy</Text>
                </UserDetails>
                <MaterialIcons name="edit" size={16} color={global.primaryColor} />
            </User>

            <Send backgroundColor={global.primaryColor}>
                <Text medium heavy>
                    Enviar {" "}
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL' }).format(amount)
                    } 
                    {" "}para Felipe
                </Text>
            </Send>

            <NumberPad onPress={pressKey} />

            <StatusBar barStyle="light-content" />
        </Container>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.backgroundColor};
`;

const Amount = styled.View`
    margin-top: 64px;
    align-items: center;
`;

const User = styled.View`
    margin: 32px 16px;
    flex-direction: row;
    align-items: center;
`;

const ProfilePhoto = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 12px;
`;

const UserDetails = styled.View`
    flex: 1;
    margin: 0 16px;
`;

const Send = styled.TouchableOpacity`
    margin: 16px 16px 5px 16px;
    background-color: ${(props) => props.backgroundColor};
    padding: 16px 32px;
    align-items: center;
    border-radius: 32px;
`;

const StatusBar = styled.StatusBar``;