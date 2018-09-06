
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
      marginTop: 50,
      justifyContent: 'center',
  },
  productText: {
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
    color: '#FFB100'
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
    marginTop: 240,
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
  }
});