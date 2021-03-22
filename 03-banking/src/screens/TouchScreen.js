import React from 'react'
import styled from 'styled-components'
import {Fontisto, MaterialIcons} from '@expo/vector-icons';

import Text from '../components/Text';

import global from '../styles/global';

export default function TouchScreen({ navigation }) {
    return (
      <Container backgroundColor={global.background}>
          <Text center heavy title color={global.primaryColor} margin="32px 0 0 0"> {global.nameApp} </Text>
          
          <Touch onLongPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
            <Circle bgColor={global.primaryColor} bgOpacity={0.7}>
                <Circle bgColor={global.primaryColor} bgOpacity={0.9}>
                    <TouchButton bgColor={global.primaryColor}>
                        <MaterialIcons name="fingerprint" size={70} color="#ffffff" />
                    </TouchButton>
                </Circle>
            </Circle>
          </Touch>

          <Text center heavy large>
              Sensor de Digital, toque para acessar  {"\n"} sua conta no {global.nameApp}.
          </Text>
          <Text center bold margin="16px 0 0 0" color={global.textSecondary}>
            Por favor verifique sua identidade {"\n"} usando o Sensor de Digital
          </Text>

          <PinAccess onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
            <Fontisto name="locked" color={global.primaryColor} size={16} />
            <Text bold margin="0 0 0 8px" color={global.primaryColor}>
                Digite sua senha
            </Text>
          </PinAccess>

          <StatusBar barStyle="light-content" />
      </Container>
    )
};

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.backgroundColor};
`;

const Touch = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Circle = styled.View`
    background-color: ${(props) => props.bgColor};
    opacity: ${(props) => props.bgOpacity};
    padding: 32px;
    border-radius: 999px;
`;

const TouchButton = styled.View`
    background-color: ${(props) => props.bgColor};
    padding: 8px;
    border-radius: 100px;
`;

const PinAccess = styled.TouchableOpacity`
    margin-top: 16px;
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const StatusBar = styled.StatusBar``;