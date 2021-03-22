import React from 'react'
import {Dimensions} from 'react-native';
import styled from 'styled-components';
import {FontAwesome5, MaterialIcons, AntDesign} from '@expo/vector-icons';
import {LineChart} from 'react-native-chart-kit';

import Text from '../components/Text';
import purchaseData from '../data/purchases';

import global from '../styles/global';

export default function HomeScreen() {
    const renderPurchase = ({ item }) => (
        <Purchase color={global.backgroundTertiary}>
            <PurchaseInfo>
                <Text heavy>
                    {item.product}
                </Text>
                <Text bold margin="2px 0 2px 0">
                    {item.store}
                </Text>
                <Text small color={global.textSecondary}>
                    {item.address}
                </Text>
            </PurchaseInfo>
            <Text heavy>
                {item.price}
            </Text>
        </Purchase>
    );

    return (
        <Container backgroundColor={global.background}>
            <Header>
                <ProfilePhoto source={require('../../assets/profilePhoto.jpg')}/>
                <Welcome>
                    <Text heavy medium>Bem vindo,</Text>
                    <Text>Ivan Costa</Text>
                </Welcome>
                <FontAwesome5 name="cog" size={24} color={global.primaryColor}/>
            </Header>

            <Text center title black>
                R$ 19.129,39
            </Text>
            <Text center heavy color={global.textSecondary}>
                Saldo
            </Text>

            <Chart>
                <LineChart 
                    data={{
                        labels: ["Mai", "Jun", "Jul", "Ago", "Set", "Out"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                ],
                            },
                        ],
                    }}
                    width={Dimensions.get("window").width}
                    height={200}
                    yAxisLabel="R$"
                    yAxisSuffix="k"
                    chartConfig={{
                        backgroundGradientFrom: `${global.background}`,
                        backgroundGradientTo: `${global.background}`,
                        color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
                        labelColor: () => `${global.textPrimary}`,
                        strokeWidth: 3,
                    }}
                    withVerticalLines={false}
                    vithHorizontalLines={false}
                    bezier
                 />
            </Chart>

            <Purchases backgroundColor={global.backgroundSecondary}
                ListHeaderComponent={
                    <>
                        <TransactionsHeader>
                            <Text>
                                Últimas Compras
                            </Text>
                            <MaterialIcons name="sort" size={24} color={global.primaryColor} />
                        </TransactionsHeader>

                        <SearchContainer backgroundColor={global.backgroundTertiary}>
                            <AntDesign name="search1" size={18} color={global.primaryColor} />
                            <Search placeholder="Pesquisar Transação" textColor="red" />
                        </SearchContainer>
                    </>
                } 
                data={purchaseData} renderItem={renderPurchase} showVerticalScrollIndicator={false}
            />
            
            <StatusBar barStyle="light-content" />
        </Container>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.backgroundColor};
`;

const Header = styled.View`
    flex-direction: row;   
    align-items: center;
    margin: 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

const Welcome = styled.View`
    flex: 1;
    padding: 0 16px;
`; 

const Chart = styled.View`
    margin: 32px 0;
`;

const Purchases = styled.FlatList`
    background-color: ${(props) => props.backgroundColor};
    padding: 16px;
`;

const TransactionsHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SearchContainer = styled.View`
    background-color: ${(props) => props.backgroundColor};
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    border-radius: 6px;
    margin: 16px 0;
`;

const Search = styled.TextInput`
    flex: 1;
    padding: 8px 16px;
    color: ${(props) => props.textColor};
`;

const Purchase = styled.View`
    flex-direction: row;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: ${(props) => props.color};
    padding-bottom: 12px;
    margin-bottom: 12px;
`;

const PurchaseInfo = styled.View``;

const StatusBar = styled.StatusBar``;