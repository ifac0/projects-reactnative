import React , {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Fontisto } from '@expo/vector-icons';

import Text from '../components/Text';
import NumberPad from '../components/NumberPad';

import global from '../styles/global';

export default function PinScreen({ navigation }) {
    const [pinCount, setPinCount] = useState(0);
    const totalPins = 6;    

    useEffect(() => {
        if(pinCount == totalPins) {
            navigation.navigate("Tabs");
        }
    }, [pinCount]);

    const renderPins = () => {
        const pins = []

        for (let x = 1; x <= totalPins; x++) {
            pins.push (
                x <= pinCount? (
                    <PinContainer key={x} color={global.secondaryColor}>
                        <Pin color={global.secondaryColor} />
                    </PinContainer>
                ) : (
                    <PinContainer key={x} color={global.secondaryColor}/>
                )
            )
        }

        return pins;
    }

    const pressKey = (_, index) => {
        setPinCount(prev => {
            return index != 10 ? prev + 1 : prev - 1;
        });
    }

    return (
       <Container backgroundColor={global.background}>
           <Text center heavy title color={global.primaryColor} margin="32px 0 0 0">mybank</Text>
           <Text center heavy title margin="32px 0 0 0">Digite seu código PIN.</Text>
       
            <AcessPin>{renderPins()}</AcessPin>

            <Text center bold margin="8px 0 0 0 " color="#9c9c9f">Esqueceu seu PIN?</Text>

            <UseTouch onPress={() => navigation.navigate("Touch")}>
                <Fontisto name="locked" color={global.primaryColor} size={16} />
                <Text bold margin="0 0 0 8px" color={global.primaryColor}> Use o Sensor de Digital </Text>
            </UseTouch>

            <NumberPad onPress={pressKey} />

            <StatusBar barStyle="light-content" />
       </Container>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.backgroundColor};
`;

const AcessPin = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 32px 64px 16px 64px;
`;

const UseTouch = styled.TouchableOpacity`
    margin: 32px 0 64px 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const PinContainer = styled.View`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border-width: 1px;
    border-color:  ${(props) => props.color};
    align-items: center;
    justify-content: center;
`;

const Pin = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color:  ${(props) => props.color};
`;

const StatusBar = styled.StatusBar`

`;
