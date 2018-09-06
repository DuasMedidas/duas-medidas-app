import React from 'react';
import { Text, Image, View  } from 'react-native';
import { Container, Content, Item, Input, Button, Left, Header, Body, Right, Icon, Title } from 'native-base';

import styles from './styles';

export default class Calculator extends React.Component {

  render() {
    const produto = 'Bolo';

    const {navigate} = this.props.navigation;

    const backPage = () => {
        navigate('Product');
    }

    return (
        <Container >
            <Header>
                <Left>
                    <Button transparent onPress={backPage}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Calculadora</Title>
                </Body>
                <Right />
               </Header>
            <Content style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.productText}>Sugerimos que o preço de venda do seu {produto} deve ser: </Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.dollar, styles.bar]}>R$ </Text>
                    <Text style={[styles.valueProduct, styles.bar]}>18,50 </Text>
                    <Image 
                        style={{marginLeft: 8}}
                        source={require('../../imgs/progress.jpg')}
                    />
                </View>

                <Text>Custos </Text>

                <View style={styles.costIngred}>
                    <Text> Ingredientes da receita </Text>
                    <Text style={styles.costValue}>R$ 6,90 </Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row', marginVertical: 3}}>
                    <Text>+ 15% custo de produção</Text>
                    <Text style={styles.costValue}>R$ 6,90 </Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row', marginVertical: 3}}>
                    <Text>+ 10% custo de produção</Text>
                    <Text style={styles.costValue}>R$ 6,90 </Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row', marginVertical: 3}}>
                    <Text>+ 15% contas de água, gás e energia</Text>
                    <Text style={styles.costValue}>R$ 6,90 </Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row', marginVertical: 3}}>
                    <Text>+ R$0,40 para embalagem</Text>
                    <Text style={styles.costValue}>R$ 6,90 </Text>
                </View>

                <Item regular style={styles.costProd}>
                    <Input editable={false} placeholder='Custos' />
                </Item>

                <Item regular style={styles.costProd}>
                    <Input style={styles.colorPrice} editable={false} value='Preço sugerido para venda' />
                </Item>

                <View style={styles.viewFooter}>
                    <Image source={require('../../imgs/check.png')} />
                    <Text style={styles.textFooter}>Comparado com a média de mercado, seu produto está com preço competitivo.</Text>
                </View>

                <Button style={styles.addResume}>
                    <Text style={styles.addResumeText}>+ Adicionar ao cardápio</Text>
                </Button>

            </Content>
        </Container>
    );
  }
}
