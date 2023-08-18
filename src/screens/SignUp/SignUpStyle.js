import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A1C',
    paddingHorizontal: 20,
  },
  header: {
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
  inputBox: {
    marginTop: 20,
  },
  text2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    backgroundColor: '#777777',
    borderRadius: 5,
  },
  text3: {
    fontSize: 12,
    color: 'white',
  },
  buttonBox: {
    alignItems: 'center',
    marginTop: 40,
  },
  nextButton: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 25,
    backgroundColor: '#535353',
  },
  text4: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  border: {
    borderWidth: 0.5,
    borderColor: 'white',
    marginTop: 50,
  },
  bottomTextBox: {
    marginLeft: 10,
    marginTop: 20,
  },
  text5: {
    color: 'white',
    fontSize: 12,
    marginVertical: 15,
    marginRight: 30,
  },
  text6: {
    color: '#1ED760',
    marginVertical: 15,
    fontSize: 12,
  },
  bottomButton: {
    paddingHorizontal: 90,
  },
  bottomButton2: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text7: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
});

export default styles;
