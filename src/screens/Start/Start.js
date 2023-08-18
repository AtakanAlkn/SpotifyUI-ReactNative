import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import styles from './StartStyle';
import CustomButton from './components/CustomButton/';

const Start = () => {
  const windowWidth = Dimensions.get('window').width;
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
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 30,
                width: windowWidth / 1.2,
                paddingVertical: 10,
                margin: 5,
              }}>
              <Text>Sign up free</Text>
            </TouchableOpacity>
            <CustomButton title="Continue with Google" logo="google.png" />
            <CustomButton title="Continue with Facebook" logo="google.png" />
            <CustomButton title="Continue with Apple" logo="google.png" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Start;
