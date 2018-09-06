
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    },
    bar: {
      borderRightWidth: 1,
    },
    dollar: {
      color:'#666',
      fontSize: 40
    },
    addResumeText: {
      fontSize: 12,
      paddingLeft: 9,
      color: '#3AA5CF'
    },
    addResume: {
      width: 160,
      marginTop: 35,
      borderColor: '#3AA5CF',
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: '#E8F5F9',
      bottom: 0,
      borderRadius: 30,
    },
    colorPrice: {
      color:'#FFB100',
      borderColor: '#FFB100',
    },
    textFooter: {
      paddingLeft: 10,
    },
    viewFooter: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 2,
    },
    costProd: {
      marginVertical: 5,
      borderWidth: 1,
      borderRadius: 10,
    },
    priceText: {
      backgroundColor: '#FFB100',
      borderColor: '#FFB100',
    },
    costIngred: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      paddingBottom: 20,
      paddingTop: 10
    },
    costValue: {
      textAlign: 'right'
    },
    row: {
      flexDirection: 'row',
      paddingTop: 35,
    },
    form: {
        justifyContent: 'center',
    },
    productText: {
      fontWeight: 'bold',
      fontSize: 25,
      marginTop: 6,
      textAlign: 'left'
    },
    input: {
      flex: 1,
      width: 100
    },
    button: {
      flex: 1,
      width: 180,
      bottom: 0,
      backgroundColor: '#FFF',
      paddingVertical: 10,
      marginRight: 18,
      borderColor: '#FFB100',
      borderWidth: 1,
      borderRadius: 30,
      marginTop: 360,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.4,
      position: 'relative',
      bottom: 0,
      alignSelf: 'flex-end',
    },
    textButton: {
      color: '#FFB100',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    produto: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    valueProduct: {
        fontSize: 40,
        color:'#FFB100'
    }
});