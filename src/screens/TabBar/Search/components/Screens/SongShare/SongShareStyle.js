import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(171, 44, 32)',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBox: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {marginBottom: 20, width: windowWidth / 2, height: windowWidth / 2},
  shareBox: {
    marginTop: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
