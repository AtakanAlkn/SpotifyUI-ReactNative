import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    width: windowWidth / 1.2,
    paddingVertical: 10,
    margin: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginLeft: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 50,
  },
});

export default styles;
