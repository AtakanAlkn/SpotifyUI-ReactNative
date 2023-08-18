import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './screens/Start/Start';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#1B1A1C" // Sayfanın rengiyle aynı renk olarak ayarlayın
        barStyle="light-content" // Durum çubuğunun (sinyal simgeleri ve saati içeren kısım) beyaz renkte olduğunu belirtin
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
