import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A1C',
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    paddingLeft: 40,
  },
  bottomButton2: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    zIndex: 2,
    position: 'absolute',
    bottom: 40,
  },
  text7: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
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
});

export default styles;
