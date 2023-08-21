import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import styles from './HomeStyle';
import HomeData from '../../../data/HomeData/Home.json';
import ImageData from '../../../data/HomeData/Image.json';
import EditorData from '../../../data/HomeData/Editor.json';
import RecentlyCard from './components/RecentlyCard/RecentlyCard';
import EditorCard from './components/EditorCard/EditorCard';

const Home = () => {
  const renderCard = ({item}) => {
    return <RecentlyCard item={item} />;
  };
  const renderEditorCard = ({item}) => {
    return <EditorCard item={item} />;
  };
  const image1 = ImageData['1'];
  const image2 = ImageData['2'];
  const image3 = ImageData['3'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.innerHeader}>
          <Text style={styles.innerHeaderText}> Recently played</Text>
        </View>
        <View style={styles.innerHeader2}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../../../assets/images/notification.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../../../assets/images/orientation.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../../../assets/images/settings.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.header2}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          data={HomeData}
          renderItem={renderCard}
          horizontal
        />
        <View style={styles.innerHeader3}>
          <Image
            resizeMode="cover"
            style={styles.image2}
            source={{uri: image1}}
          />
          <View style={styles.innerHeader3TextBox}>
            <Text style={styles.text3}>#SPOTIFYWRAPPED</Text>
            <Text style={styles.text4}>Your 2022 in review</Text>
          </View>
        </View>
        <View style={styles.innerHeader4}>
          <View>
            <TouchableOpacity>
              <Image
                resizeMode="cover"
                style={styles.image3}
                source={{uri: image2}}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Your Top Songs 2022</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                resizeMode="cover"
                style={styles.image3}
                source={{uri: image3}}
              />
            </TouchableOpacity>

            <Text style={styles.text}>Your Artists Revealed</Text>
          </View>
        </View>
        <View style={styles.editors}>
          <Text style={styles.textEditor}>Editor's picks</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            data={EditorData}
            renderItem={renderEditorCard}
            horizontal
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
