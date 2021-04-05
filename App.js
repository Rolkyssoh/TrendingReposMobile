/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrendingScreen from './src/screens/trending-screen';
import SettingScreen from './src/screens/setting-screen';
import TabBar from './src/components/navigations/bottom-tab/tab-bar.navigation';

const Tab = createBottomTabNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator tabBar={(props)=> <TabBar {...props} />}>
        <Tab.Screen 
          name="Trending" 
          component={TrendingScreen}
          initialParams={{ icon : 'star'}}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingScreen} 
          initialParams={{ icon : 'settings-sharp'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;
