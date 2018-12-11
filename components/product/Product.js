import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Title, Left, Body, Right } from 'native-base';

import styles from './styles';

const {width, height} = Dimensions.get('window');

export default class Product extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        const nextPage = () => { navigate('Calculator') }

        return (
            <Container style={styles.container}>
                <Header>
                   <Left />
                    <Body >
                        <Title>Produto</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Form style={styles.form}>

                        <Text style={styles.productText}>Farinha de Trigo</Text>

                        <Item floatingLabel>
                            <Label>Xícaras(s) de Farinha de Trigo</Label>
                            <Input keyboardType="number-pad"/>
                        </Item>

                        <Item floatingLabel>
                            <Label>Valor do Kg</Label>
                            <Input />
                        </Item>

                        <TouchableOpacity style={styles.button} onPress={nextPage}>
                            <Text style={styles.textButton} >Adicionar</Text>
                        </TouchableOpacity>
                    </Form>

                </Content>
            </Container>
    );
  }
}