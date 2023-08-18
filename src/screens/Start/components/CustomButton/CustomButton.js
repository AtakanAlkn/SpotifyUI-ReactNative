import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './CustomButtonStyle';

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.logo}
          source={
            props.logo === 'google.png'
              ? require('../../../../assets/images/google.png')
              : props.logo === 'facebook.png'
              ? require('../../../../assets/images/facebook.png')
              : props.logo === 'apple.png'
              ? require('../../../../assets/images/apple.png')
              : null
          }
        />

        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
