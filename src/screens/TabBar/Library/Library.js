import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './LibraryStyle';
import Card from './components/Card';
import MusicData from '../../../data/HomeData/Home.json';

const Library = () => {
  const renderCard = ({item}) => {
    return <Card item={item} />;
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1B1A1C" />
      <View style={styles.header}>
        <View style={styles.leftSide}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/tom.jpg')}
          />
          <Text
            style={{
              color: 'white',
              marginLeft: 10,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Your Library
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../../assets/images/Add.png')}
          />
        </View>
      </View>
      <View
        style={{
          marginVertical: 30,
          alignItems: 'center',
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.text}>Playlists</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.text}>Artists</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.text}>Albums</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.text}>Podcasts & shows</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          Recently played
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',

            alignItems: 'flex-end',
          }}>
          <Image
            style={{width: 15, height: 15}}
            source={require('../../../assets/images/comp17.png')}
          />
        </View>
      </View>
      <FlatList data={MusicData} renderItem={renderCard} />
    </View>
  );
};

export default Library;
