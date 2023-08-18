import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './ChoosePodcastsStyle';

const ChoosePodcasts = () => {
  return (
    <View>
      <Text>ChoosePodcasdasts</Text>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="black"
      />
      <TouchableOpacity style={styles.bottomButton2} onPress={null}>
        <Text style={styles.text7}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChoosePodcasts;
