import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './CustomButtonStyle';

const CustomButton = props => {
  const logoPath = '../../../../assets/images/' + props.logo;
  console.log(logoPath);

  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/images/apple.png')}
        />
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
