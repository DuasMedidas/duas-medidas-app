import React from 'react';

import { Text, Image } from 'react-native';

import { Container, Content, Header, Card, CardItem, Body, View, Title , Left, Right} from 'native-base';

import styles from './styles';

export default class TypeFood extends React.Component {

   render() {

       const {navigate} = this.props.navigation;

       const nextPage = () => {
         navigate('Food');
       }

       return (
           <Container>
               <Header>
                   <Left />
                   <Body>
                       <Title>Portifolio</Title>
                   </Body>
                   <Right />
               </Header>
               <Content>
                   <View style={styles.row}>

                       <Card style={styles.card}>
                           <CardItem button onPress={nextPage} >
                               <Body>
                                   <Image
                                       style={{width: 180, height: 120, alignContent: "center", alignSelf: "center"}}
                                       source={require('../../imgs/bolinho.png')} />
                                       <Text></Text>
                               </Body>
                           </CardItem>
                       </Card>

                       <Card style={styles.card}>
                           <CardItem button onPress={nextPage} >
                               <Body>
                                   <Image
                                       style={{width: 180, height: 120, alignContent: "center", alignSelf: "center"}}
                                       source={require('../../imgs/docinho.png')} />
                               </Body>
                           </CardItem>
                       </Card>
                   </View>
                   <View style={styles.row}>
                       <Card style={styles.card}>
                           <CardItem button onPress={nextPage} >
                               <Body>
                                   <Image
                                       style={{width: 180, height: 120, justifyContent: "center", alignSelf: "center"}}
                                       source={require('../../imgs/pao.png')} />
                               </Body>
                           </CardItem>
                       </Card>

                       <Card style={styles.card}>
                           <CardItem button onPress={nextPage} >
                               <Body>
                                   <Image
                                       style={{width: 180, height: 120, alignContent: "center", alignSelf: "center"}}
                                       source={require('../../imgs/restaurante.png')} />
                               </Body>
                           </CardItem>
                       </Card>
                   </View>

               </Content>
           </Container>
       );
   }
}