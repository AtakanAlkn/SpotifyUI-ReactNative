import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './PodCastsCardStyle';

const PodCastsCard = ({podcasts}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: podcasts.image}}
        />
      </TouchableOpacity>
      <View style={styles.textBox}>
        <Text style={styles.text}>{podcasts.name}</Text>
      </View>
    </View>
  );
};

export default PodCastsCard;
