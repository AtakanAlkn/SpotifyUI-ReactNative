import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 25,
    marginVertical: 10,
  },
  image: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    borderRadius: 20,
  },
  textBox: {
    justifyContent: 'center',
    maxWidth: 80,
  },
  text: {
    color: 'white',
  },
});

export default styles;
