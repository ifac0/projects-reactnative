import React from 'react'
import styled from 'styled-components';

import Text from '../components/Text';

import global from '../styles/global';

export default function CardsScreen() {
    const myCards = [
        {
            id: '1',
            color: '#FFFF',
            number: '1234',
            exp: '10/2020',
            logo: require('../../assets/visa.png')
        },
        {
            id: '2',
            color: '#C80815',
            number: '5678',
            exp: '12/2022',
            logo: require('../../assets/hipercard.png')
        },
        {
            id: '3',
            color: '#1B2954',
            number: '9072',
            exp: '04/2023',
            logo: require('../../assets/american.png')
        },
        {
            id: '4',
            color: '#FFFF',
            number: '7820',
            exp: '12/2020',
            logo: require('../../assets/mastercard.png')
        }
    ];

    const renderCard = ({item}) => (
        <CardContainer backgroundColor={global.backgroundSecondary}>
            <CardInfo color={global.backgroundTertiary}>
                <CardLogoContainer bgColor={item.color}>
                    <CardLogo source={item.logo} resezeMode="contain" />
                </CardLogoContainer>
                <CardDetails>
                    <Text heavy>
                        &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;{" "}
                        <Text medium heavy>{item.number}</Text>
                    </Text>
                    <Text small heavy color={global.textSecondary} margin="4px 0 0 0">{item.exp}</Text>
                </CardDetails>
            </CardInfo>
            <CardActions>
                <Remove>
                    <Text heavycolor={global.textSecondary}>Remover</Text>
                </Remove>
                <Update color={global.primaryColor}>
                    <Text heavy>Atualizar</Text>
                </Update>
            </CardActions>
        </CardContainer>
    );

    return (
        <Container backgroundColor={global.background}>
            <Text center large heavy margin="16px 0 0 0">Meus Cartões</Text>

            <Cards data={myCards} renderItem={renderCard} />
            <StatusBar barStyle="light-content" />
        </Container>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.backgroundColor};
`;

const Cards = styled.FlatList`
    padding: 0 8px;
    margin-top: 32px;
`;

const CardContainer = styled.View`
    background-color: ${(props) => props.backgroundColor};
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 8px;
`;

const CardInfo = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color:${(props) => props.color};
    padding-bottom: 12px;
    margin-bottom: 12px;
`;

const CardLogoContainer = styled.View`
    width: 64px;
    height: 64px;
    background-color: ${(props) => props.bgColor};
    align-items: center;
    justify-content: center;
    border-radius: 32px;
`;

const CardLogo = styled.Image`
    width: 40px;
    height: 40px;
`;

const CardDetails = styled.View`
    flex: 1;
    align-items: flex-end;
`;

const CardActions = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const Remove = styled.TouchableOpacity`
    margin-right: 32px;
`;

const Update = styled.TouchableOpacity`
    background-color: ${(props) => props.color};
    padding: 8px 16px;
    border-radius: 8px;

`;

const StatusBar = styled.StatusBar``;