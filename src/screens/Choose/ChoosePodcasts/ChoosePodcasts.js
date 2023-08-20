import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import styles from './ChoosePodcastsStyle';
import Podcasts from '../../../data/PodCastsData/PodCasts.json';
import PodCastsCard from './components/PodCastsCard/PodCastsCard';

const ChoosePodcasts = props => {
  const renderPodcastsCard = ({item}) => {
    return <PodCastsCard podcasts={item} />;
  };
  const numColumns = 3;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Now chose some</Text>
      <Text style={styles.titleText}>podcasts.</Text>
      <View style={styles.inputBox}>
        <Image
          source={require('../../../assets/images/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="black"
        />
      </View>

      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          keyExtractor={item => item.id.toString()}
          data={Podcasts}
          renderItem={renderPodcastsCard}
          contentContainerStyle={{
            alignItems: 'flex-start',
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.bottomButton2}
          onPress={() => props.navigation.navigate('TabBar')}>
          <Text style={styles.text7}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChoosePodcasts;
