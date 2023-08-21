import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './AlbumViewStyle';
import MusicCard from './components/MusicCard';
import MusicData from '../../../../../../data/MusicData/Music.json';

const AlbumView = props => {
  const renderCard = ({item}) => {
    return <MusicCard item={item} />;
  };
  return (
    <LinearGradient
      colors={['rgb(171, 44, 32)', 'rgb(84, 29, 24)']} // Renkleri burada değiştirin (kırmızıdan siyaha doğru)
      style={styles.linearGradient}>
      <StatusBar backgroundColor="rgb(171, 44, 32)" barStyle="light-content" />
      <View>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            style={styles.chevron}
            source={require('../../../../../../assets/images/chevronWhite.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.scdn.co/image/ab67616d0000b273582d56ce20fe0146ffa0e5cf',
          }}
        />
      </View>
      <View style={styles.infoBox}>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 7,
            }}>
            1(Remastered)
          </Text>
          <View style={styles.innerContainer}>
            <Image
              style={{
                borderRadius: 100,
                width: 30,
                height: 30,
                marginRight: 10,
              }}
              source={{
                uri: 'https://i.scdn.co/image/ab6761610000e5ebe9348cc01ff5d55971b22433',
              }}
            />
            <Text style={{color: 'white'}}>The Beatles</Text>
          </View>
          <Text style={{color: '#B3B3B3', fontSize: 15, marginVertical: 7}}>
            Album ●2000
          </Text>
          <View style={styles.innerContainer2}>
            <TouchableOpacity>
              <Image
                style={{width: 25, height: 25, marginRight: 10}}
                source={require('../../../../../../assets/images/hearth.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 25, height: 25, marginRight: 10}}
                source={require('../../../../../../assets/images/download.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('AlbumControl')}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../../../../../assets/images/more.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#1DB954',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../../../../assets/images/Vector.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList data={MusicData} renderItem={renderCard} />
    </LinearGradient>
  );
};

export default AlbumView;
