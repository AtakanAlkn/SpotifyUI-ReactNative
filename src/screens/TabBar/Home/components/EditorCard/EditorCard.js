import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './EditorCardStyle';

const EditorCard = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: item.image}}
        />
      </TouchableOpacity>

      <View style={styles.textBox}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </View>
  );
};

export default EditorCard;
