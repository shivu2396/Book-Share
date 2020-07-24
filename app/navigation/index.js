import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Test } from '../screens/test-screen';
import { Listing } from '../screens/data-screen';
import { Detail } from '../screens/delail-screen';
import { Splash } from '../screens/splash-screen';
import { Onboarding } from '../screens/onboarding-screen';
import { Welcome } from '../screens/welcome-screen';
import { Discover } from '../screens/discover-screen';
import { Library } from '../screens/library-screen';
import { Store } from '../screens/store-screen';
import { Profile } from '../screens/profile-screen';
import { Landing } from '../screens/landing-screen';
import { Signin } from '../screens/signin-screen';
import { Signup } from '../screens/signup-screen';
import { WishlistScreen } from '../screens/wishlist-screen';

const Stack = createStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="wishlist" component={WishlistScreen} />
      {/*<Stack.Screen name="Test" component={Test} /> */}
      {/* <Stack.Screen name="Test" component={Test} /> */}
      {/* <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="onboarding" component={Onboarding} />
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="library" component={Library} /> */}

      {/* <Stack.Screen name="landing" component={Landing} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="signin" component={Signin} /> */}
      {/* <Stack.Screen name="listing" component={Listing} />
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen name="welcome" component={Welcome} /> */}
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator
      headermode={'false'}
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="newspaper" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fa-building-o " size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const RootNavigation = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
};
export default RootNavigation;
