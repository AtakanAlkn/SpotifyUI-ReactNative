import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './InputCardStyle';

const InputCard = props => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    imageBox: {},
    image: {
      width: 50,
      height: 50,
      borderRadius: 100,
    },
    textBox: {
      marginHorizontal: 10,
    },
    text: {
      color: 'white',
    },
    text2: {
      color: '#B3B3B3',
    },
  });
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.imageBox}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: 'https://i.scdn.co/image/ab67616d0000b273582d56ce20fe0146ffa0e5cf',
          }}
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>1(Remastered)</Text>
        <Text style={styles.text2}>Album •The Beatles</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InputCard;
