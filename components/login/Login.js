import React from 'react';

import { Text, View, TouchableOpacity, Image } from 'react-native';

import { Container, Content, Form, Item, Input, Label } from 'native-base';

import styles from './styles';

export default class Login extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    const login = () => {
      navigate('TypeFood');
    }

    return (
        <Container>
            <Content>
                <Form style={styles.form}>
                    <View>
                        <Image 
                            style={{
                              width: 180, height: 180, 
                              alignContent: "center", alignSelf: "center"
                            }}
                            source={require('../../imgs/logo.png')} />
                    </View>

                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} />
                    </Item>

                    <TouchableOpacity style={styles.button} onPress={login}>
                        <Text style={styles.textButton}>FAZER LOGIN</Text>
                    </TouchableOpacity>

                    <Text style={styles.noLogin}>Não tenho conta.</Text>

                </Form>

            </Content>
        </Container>
    );
  }
}