import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    position: 'absolute',
    zIndex: 2,
    left: 10,
    height: 15,
    width: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#282828',
    paddingVertical: 5,
    marginVertical: 5,
    marginRight: 30,
    borderRadius: 10,
    paddingLeft: 40,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 10,
    flex: 1,
  },
});

export default styles;
