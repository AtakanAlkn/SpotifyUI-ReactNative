import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Home from './Home/Home';
import Search from './Search/Search';
import Library from './Library/Library';

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {backgroundColor: '#1B1A1C'},
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#B3B3B3',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('../../assets/images/homeFilled.png') // Tıklanmış durum için ikon yolu
              : require('../../assets/images/home.png'); // Tıklanmamış durum için ikon yolu
          } else if (route.name === 'Search') {
            iconName = focused
              ? require('../../assets/images/searchFilled.png')
              : require('../../assets/images/searchIc.png');
          } else if (route.name === 'Library') {
            iconName = focused
              ? require('../../assets/images/libraryFilled.png')
              : require('../../assets/images/library.png');
          }
          return <Image source={iconName} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
}

export default TabBar;
