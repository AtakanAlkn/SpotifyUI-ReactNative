import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './SearchCardStyle';

const SearchCard = ({item}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, backgroundColor: item.backgroundColor}}>
      <Text style={styles.text}>{item.categoryName}</Text>
    </TouchableOpacity>
  );
};

export default SearchCard;
