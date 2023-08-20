import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
    flex: 1,
    height: windowHeight / 7,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
});

export default styles;
