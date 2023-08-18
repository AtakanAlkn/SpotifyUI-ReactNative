import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A1C',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'column',
  },
  innerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButton: {},
  image: {
    width: 32,
    height: 32,
  },
  text1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  placeHolder: {
    width: 32,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    zIndex: 2,
  },
  input: {
    backgroundColor: 'white',
    marginVertical: 15,
    borderRadius: 10,
    flex: 1,
    paddingLeft: 40,
  },

  text7: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  bottomButton3: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default styles;
