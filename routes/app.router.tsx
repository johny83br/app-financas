import Home from '@/app/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: '#FFF',
          paddingTop: 20,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },

        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#fff',

        drawerInactiveBackgroundColor: '#f0f2ff',
        drawerInactiveTintColor: '#121212',

        drawerItemStyle: {
          borderRadius: 5,
        },
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
    </AppDrawer.Navigator>
  );
}
