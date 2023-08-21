import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CardStyle';

const Card = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={item.circle ? styles.image : styles.image2}
        source={{uri: item.image}}
      />
      <View style={styles.textBox}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={{color: '#B3B3B3'}}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
