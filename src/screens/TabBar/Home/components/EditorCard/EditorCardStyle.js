import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  image: {
    width: windowWidth / 2.7,
    height: windowWidth / 3,
  },
  textBox: {
    maxWidth: windowWidth / 2.8,
  },
  text: {
    color: '#B3B3B3',
  },
});

export default styles;
