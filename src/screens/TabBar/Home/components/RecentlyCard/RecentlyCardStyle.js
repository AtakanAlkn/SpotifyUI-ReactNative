import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  image: {
    width: windowWidth / 4,
    height: windowWidth / 4,
  },
  image2: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    borderRadius: 100,
  },
  text: {
    color: 'white',
  },
});

export default styles;
