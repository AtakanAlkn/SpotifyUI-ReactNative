import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1A1C',
    flex: 1,
    paddingVertical: 10,
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cameraBox: {
    alignItems: 'flex-end',
    flex: 1,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    marginLeft: 18,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    paddingLeft: 40,
  },
  text1: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  deneme: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default styles;
