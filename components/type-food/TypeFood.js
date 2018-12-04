import React from 'react';

import { Text, Image } from 'react-native';

import { Container, Content, Header, Card, CardItem, Body, View, Title , Left, Right} from 'native-base';


import styles from './styles';
import TypeFoodService from './TypeFoodService';

export default class TypeFood extends React.Component {

    
    constructor(props) {
        super(props);
        this.service = new TypeFoodService();
        this.state = {list: []};
    }

    componentDidMount() {
        this.service.findAll().then(response => {
            this.setState({list: response});
        })
        
    }

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
                       <Title>Portifolio </Title>
                   </Body>
                   <Right />
               </Header>
               <Content>
                    <View style={styles.row}>
                        {this.state.list.map(item => {
                            const url = `../../imgs/${item.name.toString()}.png`;

                            return (
                                <Card key={item.id}  style={styles.card}>
                                    <CardItem button onPress={nextPage} >
                                        <Body>
                                            <Image
                                                style={{
                                                    width: 180, height: 120, 
                                                    alignContent: "center", alignSelf: "center"
                                                }}
                                                source={require(url)} />
                                        </Body>
                                        <Text></Text>
                                    </CardItem>
                                </Card>
                            )
                        })}
                   </View>
               </Content>
           </Container>
       );
   }
}