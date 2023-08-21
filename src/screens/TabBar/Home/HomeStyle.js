import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A1C',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  innerHeader: {},
  innerHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  innerHeader2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginLeft: 15,
  },
  header2: {
    marginVertical: 10,
  },
  innerHeader3: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginVertical: 20,
  },
  image2: {
    width: windowWidth / 5,
    height: windowWidth / 5,
  },
  innerHeader3TextBox: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  text3: {
    color: '#9C9C9C',
    fontSize: 13,
  },
  text4: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  innerHeader4: {
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  image3: {
    width: windowWidth / 2.7,
    height: windowWidth / 3,
    marginRight: 20,
  },
  text: {
    color: 'white',
    marginTop: 10,
  },
  editors: {
    marginVertical: 20,
  },
  textEditor: {
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
