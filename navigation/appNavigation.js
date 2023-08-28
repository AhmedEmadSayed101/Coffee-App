import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { Dimensions, LogBox, Platform, Text, View, StyleSheet, Image } from 'react-native';
import ProductScreen from '../screens/ProductScreen';
import { themeColors } from '../theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favourites from "../screens/Favourites";
import { HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import { HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid } from 'react-native-heroicons/solid';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle: { backgroundColor: 'white' }
      }}>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeTabs} />
        <Stack.Screen name="Product" options={{ headerShown: false }} component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({ focused }) => menuIcons(route, focused),
      tabBarStyle: {
        marginBottom: 40,
        height: 75,
        alignItems: 'center',

        borderRadius: 100,
        marginHorizontal: 20,
        backgroundColor: themeColors.bgDark,

      },
    })}

    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="favourite" component={Favourites} />
    </Tab.Navigator>
  )
}

const menuIcons = (route, focused) => {
  let icon;


  if (route.name == 'home') {
    icon = focused ? <HomeSolid size="30" color={themeColors.bgLight} /> : <HomeOutline size="30" strokeWidth={2} color="white" />
  } else if (route.name == 'favourite') {
    icon = focused ? <HeartSolid size="30" color={themeColors.bgLight} /> : <HeartOutline size="30" strokeWidth={2} color="white" />
  } else if (route.name == 'cart') {
    icon = focused ? <BagSolid size="30" color={themeColors.bgLight} /> : <BagOutline size="30" strokeWidth={2} color="white" />
  }
  

  let buttonClass = focused ? backgroundColor = 'white' : '';
  return (
    <View style={styles.buttonIconsStyle + buttonClass}>
      {icon}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonIconsStyle: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 100,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

})



