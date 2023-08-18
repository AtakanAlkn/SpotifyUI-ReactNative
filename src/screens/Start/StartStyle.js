import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A1C',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  topContent: {alignItems: 'center'},
  textBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonContent: {
    margin: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    width: windowWidth / 1.2,
    paddingVertical: 10,
    margin: 5,
    backgroundColor: '#1ED760',
  },
  text2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  text3: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;
