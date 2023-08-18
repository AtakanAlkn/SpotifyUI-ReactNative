import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './ArtistCardStyle';

const ArtistCard = ({artist}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: artist.image,
            }}
          />
        </TouchableOpacity>

        <Text style={styles.text}>{artist.name}</Text>
      </View>
    </View>
  );
};

export default ArtistCard;
