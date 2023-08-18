import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeighth = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: windowWidth / 3.8,
    height: windowWidth / 3.8,
    borderRadius: 100,
  },
  text: {
    color: 'white',
  },
});

export default styles;
