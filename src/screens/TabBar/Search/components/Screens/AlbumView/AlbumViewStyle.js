import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {flex: 1},
  linearGradient: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  chevron: {},
  imageBox: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: windowWidth / 2,
    height: windowWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  innerContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
});

export default styles;
