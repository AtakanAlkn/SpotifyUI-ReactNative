import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InputScreen from './InputScreen/InputScreen';
import AlbumViewScreen from './AlbumView/AlbumView';
import AlbumControl from './AlbumControl/AlbumControl';

import SongShare from './SongShare/SongShare';

import Search from '../../Search';

const DetailsStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen name="AlbumViewScreen" component={AlbumViewScreen} />
    </Stack.Navigator>
  );
};

export default DetailsStack;
