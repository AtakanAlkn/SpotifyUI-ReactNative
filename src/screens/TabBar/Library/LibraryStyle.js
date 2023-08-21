import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1B1A1C',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  textContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 5,
    borderColor: 'white',
  },
  text: {
    color: 'white',
  },
});

export default styles;
