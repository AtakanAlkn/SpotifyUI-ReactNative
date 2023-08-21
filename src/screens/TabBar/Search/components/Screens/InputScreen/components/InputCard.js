import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './InputCardStyle';

const InputCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: item.image}}
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text2}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InputCard;
