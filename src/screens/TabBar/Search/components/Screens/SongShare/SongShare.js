import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './SongShareStyle';

const SongShare = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={{height: 25, width: 25}}
            source={require('../../../../../../assets/images/cancel.png')}
          />
        </TouchableOpacity>

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 25}}>Share</Text>
        </View>
      </View>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.scdn.co/image/ab67616d0000b273582d56ce20fe0146ffa0e5cf',
          }}
        />
        <Text style={{color: 'white', fontSize: 20}}>Love Me Do</Text>
      </View>
      <View style={styles.shareBox}>
        <TouchableOpacity>
          <Image
            style={{width: 50, height: 50, borderRadius: 100}}
            source={require('../../../../../../assets/images/r1.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{width: 50, height: 50, borderRadius: 100}}
            source={require('../../../../../../assets/images/r2.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{width: 50, height: 50, borderRadius: 100}}
            source={require('../../../../../../assets/images/r3.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SongShare;
