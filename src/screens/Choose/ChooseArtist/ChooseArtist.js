import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './ChooseArtistStyle';
import Artist from '../../../data/ArtistData/Artist.json';
import ArtistCard from './components/ArtistCard/ArtistCard';

const ChooseArtist = props => {
  const numColumns = 3;
  const onBack = () => {
    props.navigation.goBack();
  };
  renderArtistCard = ({item}) => {
    return <ArtistCard artist={item} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.innerHeader}>
          <TouchableOpacity style={styles.headerButton} onPress={onBack}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/chevronLeft.png')}
            />
          </TouchableOpacity>
          <Text style={styles.text1}>Choose 3 or more artist you like.</Text>
          <View style={styles.placeHolder} />
        </View>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require('../../../assets/images/search.png')}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="black"
          />
        </View>
      </View>
      <View style={{alignItems: 'center', flex: 1}}>
        <FlatList
          data={Artist}
          keyExtractor={item => item.id.toString()}
          renderItem={renderArtistCard}
          numColumns={numColumns}
          ListFooterComponent={
            <TouchableOpacity
              style={styles.bottomButton3}
              onPress={() => props.navigation.navigate('ChoosePodcasts')}>
              <Text style={styles.text7}>Done</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
};

export default ChooseArtist;
