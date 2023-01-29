import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import { Home } from "../screens"
import { COLORS, icons } from '../constants'

const Tab = createBottomTabNavigator()

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false, tabBarStyle: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        borderTopWidth: 0,
        backgroundColor: "transparent",
        elevation: 0
      }
    }}>
      <Tab.Screen name="HomeScreen" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../assets/icons/cutlery.png')}
            resizeMode="contain"
            style={[styles.tab, { tintColor: focused ? COLORS.primary : COLORS.secondary }]}
          />
        )
      }}
      />
      <Tab.Screen name="Search" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../assets/icons/search.png')}
            resizeMode="contain"
            style={[styles.tab, { tintColor: focused ? COLORS.primary : COLORS.secondary }]}
          />
        )
      }}
      />
      <Tab.Screen name="Like" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../assets/icons/like.png')}
            resizeMode="contain"
            style={[styles.tab, { tintColor: focused ? COLORS.primary : COLORS.secondary }]}
          />
        )
      }}
      />
      <Tab.Screen name="User" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../assets/icons/user.png')}
            resizeMode="contain"
            style={[styles.tab, { tintColor: focused ? COLORS.primary : COLORS.secondary }]}
          />
        )
      }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tab: {
    width: 25,
    height: 25,
  }
});

export default Tabs