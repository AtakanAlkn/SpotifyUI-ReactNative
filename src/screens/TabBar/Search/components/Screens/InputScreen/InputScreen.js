import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import styles from './InputScreenStyle';
import ArtistData from '../../../../../../data/ArtistData/Artist.json';
import InputCard from './components/InputCard';
import InputFooterCard from './components/InputFooterCard';

const InputScreen = props => {
  const renderInputCard = ({item}) => {
    return <InputCard item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../../../../../../assets/images/searchFilled.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="white"
          autoFocus
        />
        <TouchableOpacity>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          ListHeaderComponent={
            <Text style={{color: 'white', fontWeight: 'bold', marginTop: 20}}>
              Recent searches
            </Text>
          }
          data={ArtistData}
          renderItem={renderInputCard}
          ListFooterComponent={
            <InputFooterCard
              onPress={() => props.navigation.navigate('AlbumViewScreen')}
            />
          }
        />
      </View>
    </View>
  );
};

export default InputScreen;
