import { StyleSheet} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants';
import { Lessons, Lessons2, Lessons3, Login, PrivacyPolicy,Quiz1,Quiz2,Quiz3,TermsAndConditions} from '../screens';
import Quiz4 from '../screens/auth/Quiz4';
import Lessons4 from '../screens/auth/Lessons4';


const Stack = createNativeStackNavigator()

const AuthNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
      
    {/* AUTH SCREENS*/ }

      <Stack.Screen name={ROUTES.LOGIN} component={Login} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.TERMS} component={TermsAndConditions} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.POLICY} component={PrivacyPolicy} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.LESSONS} component={Lessons} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.QUIZ1} component={Quiz1} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.LESSONS2} component={Lessons2} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.QUIZ2} component={Quiz2} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.LESSONS3} component={Lessons3} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.QUIZ3} component={Quiz3} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.LESSONS4} component={Lessons4} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.QUIZ4} component={Quiz4} options={{headerShown: false}}/>

  
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})