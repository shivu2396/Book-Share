import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { SplashScreen } from '../screens/splash-screen';
import { OnboardingScreen } from '../screens/onboarding-screen';
import { WelcomeScreen }from '../screens/welcome-screen';
import { DiscoverScreen } from '../screens/discover-screen';
import { LibraryScreen } from '../screens/library-screen';
import { StoreScreen } from '../screens/store-screen';
import { ProfileScreen } from '../screens/profile-screen';


const Stack = createStackNavigator();
function AuthStack() {
  return(
    <Stack.Navigator>
    <Stack.Screen name="splashscreen"     component={SplashScreen} />
    <Stack.Screen name="onboardingscreen" component={OnboardingScreen} />
    <Stack.Screen name="welcomescreen"    component={WelcomeScreen} />
    </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
function BottomTab()  {
    return(
    <Tab.Navigator>
    <Tab.Screen name ="discoverscreen" component={DiscoverScreen} />
    <Tab.Screen name="libraryscreen"    component={LibraryScreen} />
    <Tab.Screen name="storescreen"      component={StoreScreen} />
    <Tab.Screen name="profilescreen"    component={ProfileScreen} />
    </Tab.Navigator>
    );
}
const RootNavigation =() => {
return(
    <Stack.Navigator>
    <Stack.Screen name= "AuthStack" component = {AuthStack}/>
    <Stack.Screen name= "BottomTab" component = {BottomTab}/>
    </Stack.Navigator>
)
}
export default RootNavigation;