import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MusicCardStyle';

const MusicCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <View>
          <Text style={styles.text}>{item}</Text>
        </View>
        <View style={styles.innerContainer2}>
          <Image
            style={styles.download}
            source={require('../../../../../../../assets/images/download.png')}
          />
          <Text style={styles.text2}>The Beatles</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.innerContainer3}>
        <Image
          style={{...styles.download, height: 20, width: 20}}
          source={require('../../../../../../../assets/images/more2.png')}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MusicCard;
