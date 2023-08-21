import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './AlbumControlStyle';

const AlbumControl = props => {
  return (
    <View style={styles.container}>
      <View style={styles.linearGradient}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.scdn.co/image/ab67616d0000b273582d56ce20fe0146ffa0e5cf',
          }}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 20}}>1(Remastered)</Text>
          <Text style={{color: '#B3B3B3'}}>The Beatles</Text>
        </View>
      </View>
      <View style={styles.linearGradient2}>
        <ScrollView>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              marginHorizontal: 30,
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../../../../assets/images/m1.png')}
            />
            <Text style={{color: 'white', marginLeft: 20}}>Like</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              marginHorizontal: 30,
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../../../../assets/images/m2.png')}
            />
            <Text style={{color: 'white', marginLeft: 10}}>Hide song</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              marginHorizontal: 30,
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../../../../assets/images/m3.png')}
            />
            <Text style={{color: 'white', marginLeft: 10}}>
              Add to playlist
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              marginHorizontal: 30,
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../../../../assets/images/m4.png')}
            />
            <Text style={{color: 'white', marginLeft: 10}}>Add to queue</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('SongShare')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              marginHorizontal: 30,
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../../../../assets/images/m5.png')}
            />
            <Text style={{color: 'white', marginLeft: 10}}>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              marginHorizontal: 30,
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../../../../assets/images/m6.png')}
            />
            <Text style={{color: 'white', marginLeft: 10}}>Go to radio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              marginHorizontal: 30,
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../../../../assets/images/m7.png')}
            />
            <Text style={{color: 'white', marginLeft: 10}}>View album</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              marginHorizontal: 30,
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../../../../assets/images/m8.png')}
            />
            <Text style={{color: 'white', marginLeft: 10}}>View artist</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              marginHorizontal: 30,
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../../../../assets/images/m9.png')}
            />
            <Text style={{color: 'white', marginLeft: 10}}>Song credits</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              marginHorizontal: 30,
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../../../../assets/images/m10.png')}
            />
            <Text style={{color: 'white', marginLeft: 10}}>Sleep timer</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default AlbumControl;
