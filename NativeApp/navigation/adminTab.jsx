import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AdminAllProducts, AddProduct, AdminSetting } from '../screens'
import { COLORS, icons } from '../constants'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarShowLabel: false,
        headerShown: false,
        style:{
          backgroundColor: 'transparent',
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={AdminAllProducts}
        options={{
          tabBarIcon: (({focused}) => (
            <Image 
              source={icons.home_icon}
              resizeMode="cover"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          )),
        }}
      />
      <Tab.Screen
        name='Add Items'
        component={AddProduct}
        options={{
          tabBarIcon: (({focused}) => (
            <Image 
              source={icons.plus_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          )),
        }}
      />
      <Tab.Screen
        name='Account'
        component={AdminSetting}
        options={{
          tabBarIcon: (({focused}) => (
            <Image 
              source={icons.user}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          )),
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs