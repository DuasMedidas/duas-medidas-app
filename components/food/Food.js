import React from 'react';

import { Container, Header, Icon, Button, Content, List, ListItem, Text, Tab, Tabs, Left, Body, Right} from 'native-base';

import styles from './styles';

export default class Food extends React.Component {
   render() {
        
       const { navigate } = this.props.navigation;
       var items = [
        'Farinha de Trigo',
        'Achocolatado',
        'Açucar',
        'Fermento',
        'Leite',
        'Manteiga',
        'Ovo'
    ];
       const nextPag = () => {
         navigate('Product');
       }
       const backPage = () => {
           navigate('TypeFood')
       }

       return (
           <Container>
               <Header styles={styles.noGeral}>
                <Left>
                    <Button transparent onPress={backPage}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Text>Ingredientes</Text>
                </Body>
                <Right/>
              </Header>

               <Content hasTabs styles={styles.noGeral}>
                   <Tabs>
                       <Tab heading="Todos">
                           <List dataArray={items}
                               renderRow={(item) =>
                                   <ListItem button onPress={() => {nextPag()}}> 
                                       
                                       <Text>{item}</Text>
                                       
                                   </ListItem>
                               }>
                           </List>
                       </Tab>
                       <Tab heading="Meus">

                       </Tab>
                       <Tab heading="Recentes">

                       </Tab>
                   </Tabs>
               </Content>
           </Container>

       );
   }
}