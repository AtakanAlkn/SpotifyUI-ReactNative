import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {flex: 1},
  linearGradient: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgb(171, 44, 32)',
  },
  linearGradient2: {
    flex: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'rgb(171, 44, 32)',
  },
  image: {
    width: windowWidth / 3,
    height: windowWidth / 3,
  },
});

export default styles;
