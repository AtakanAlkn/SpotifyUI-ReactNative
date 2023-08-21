import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './screens/Start/Start';
import SignUp1 from './screens/SignUp/SignUp1';
import SignUp2 from './screens/SignUp/SignUp2';
import SignUp3 from './screens/SignUp/SignUp3';
import SignUp4 from './screens/SignUp/SignUp4';
import ChooseArtist from './screens/Choose/ChooseArtist';
import ChoosePodcasts from './screens/Choose/ChoosePodcasts';
import TabBar from './screens/TabBar/TabBar';
import InputScreen from './screens/TabBar/Search/components/Screens/InputScreen/InputScreen';
import DetailsStack from './screens/TabBar/Search/components/Screens/DetailsStack';
import AlbumControl from './screens/TabBar/Search/components/Screens/AlbumControl/AlbumControl';
import SongShare from './screens/TabBar/Search/components/Screens/SongShare/SongShare';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1B1A1C" barStyle="light-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="SignUp1" component={SignUp1} />
        <Stack.Screen name="SignUp2" component={SignUp2} />
        <Stack.Screen name="SignUp3" component={SignUp3} />
        <Stack.Screen name="SignUp4" component={SignUp4} />
        <Stack.Screen name="ChooseArtist" component={ChooseArtist} />
        <Stack.Screen name="ChoosePodcasts" component={ChoosePodcasts} />
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="AlbumControl" component={AlbumControl} />
        <Stack.Screen name="SongShare" component={SongShare} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
