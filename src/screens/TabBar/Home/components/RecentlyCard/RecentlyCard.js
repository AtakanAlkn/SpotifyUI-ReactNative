import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './RecentlyCardStyle';

const RecentlyCard = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          style={item.circle ? styles.image : styles.image2}
          source={{uri: item.image}}
        />
      </TouchableOpacity>

      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

export default RecentlyCard;
