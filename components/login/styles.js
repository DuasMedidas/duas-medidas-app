
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  form: {
    marginTop: 50,
    justifyContent: 'center',
  },
  noLogin: {
    marginTop: 30,
    textAlign: 'center',
    color: '#9b9b9b'
  },
  input: {
    flex: 1,
    width: 100
  },
  button: {
    flex: 1,
    backgroundColor: '#FFB100',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#FFB100',
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});