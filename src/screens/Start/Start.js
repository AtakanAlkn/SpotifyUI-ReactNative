import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './StartStyle';
import CustomButton from './components/CustomButton/';

const Start = props => {
  const onSignUp = () => {
    props.navigation.navigate('SignUp1');
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topContent}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <View style={styles.textBox}>
            <Text style={styles.text}>Millions of Songs.</Text>
            <Text style={styles.text}>Free on Spotify.</Text>
          </View>
          <View style={styles.buttonContent}>
            <TouchableOpacity style={styles.button} onPress={onSignUp}>
              <Text style={styles.text2}>Sign up free</Text>
            </TouchableOpacity>
            <CustomButton title="Continue with Google" logo="google.png" />
            <CustomButton title="Continue with Facebook" logo="facebook.png" />
            <CustomButton title="Continue with Apple" logo="apple.png" />
          </View>
          <Text style={styles.text3}>Log in</Text>
        </View>
      </View>
    </View>
  );
};

export default Start;
