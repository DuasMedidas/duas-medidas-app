import React from 'react';

import { Text, Image } from 'react-native';

import { Container, Content, Header, Card, CardItem, Body, View, Title , Left, Right} from 'native-base';

import styles from './styles';
import TypeFoodService from './TypeFoodService';

export default class TypeFood extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {list: []};
    }

    render() {

        const {navigate} = this.props.navigation;

        const nextPage = () => { navigate('Food') }

       return (
           <Container>
               <Header>
                   <Left />
                   <Body>
                       <Title>Portifolio </Title>
                   </Body>
                   <Right />
               </Header>
               <Content>
                    <View style={styles.row}>

                        <Card style={styles.card}>
                            <CardItem button onPress={nextPage} >
                                <Body>
                                    <Image
                                        style={{
                                            width: 180, height: 120, 
                                            alignContent: "center", alignSelf: "center"
                                        }}
                                        source={require('../../imgs/bolos.png')}/>
                                </Body>
                                <Text></Text>
                            </CardItem>
                        </Card>

                        <Card style={styles.card}>
                            <CardItem button onPress={nextPage} >
                                <Body>
                                    <Image
                                        style={{
                                            width: 180, height: 120, 
                                            alignContent: "center", alignSelf: "center"
                                        }}
                                        source={require('../../imgs/doces.png')}/>
                                </Body>
                                <Text></Text>
                            </CardItem>
                        </Card>
                   </View>

                   <View>
                       <Card style={styles.card}>
                            <CardItem button onPress={nextPage} >
                                <Body>
                                    <Image
                                        style={{
                                            width: 180, height: 120, 
                                            alignContent: "center", alignSelf: "center"
                                        }}
                                        source={require('../../imgs/paes.png')}/>
                                </Body>
                                <Text></Text>
                            </CardItem>
                        </Card>
                   </View>

               </Content>
           </Container>
       );
   }
}