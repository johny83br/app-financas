import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import SignIn from '../app/SignIn';
import SignUp from '../app/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: '#3b3dbf'
          },
          headerTintColor: '#fff',
          headerTitle: 'Voltar'
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
