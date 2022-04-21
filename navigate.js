import React from "react";
import ScreenMain from '../Screens/ScreenMain';
import ScreenBooks from '../Screens/ScreenBooks';
import ScreenFilms from '../Screens/ScreenFilms';
import ScreenTimesheet from '../Screens/ScreenTimesheet';
import ScreenStatistics from '../Screens/ScreenStatistics';
import LoginScreen from '../Login/LoginScreen';
import HomeScreen from '../Login/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return( <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Main" component={ScreenMain} backgroundColor={'#651ACA'} options={{title: "Главная",headerStyle: {backgroundColor: '#5C4BFF',}}}/>
            <Stack.Screen name="Books" component={ScreenBooks} options={{title: "Книги и Фильмы", headerStyle: {backgroundColor: '#FFC8F1'}}} />
            <Stack.Screen name="Films" component={ScreenFilms} options={{title: "Книги и Фильмы", headerStyle: {backgroundColor: '#FFC8F1'}}}/>
            <Stack.Screen name="Timesheet" component={ScreenTimesheet} options={{title: "Расписание дная", headerStyle: {backgroundColor: '#FFC8F1'}}}/>
            <Stack.Screen name="Statistics" component={ScreenStatistics} options={{title: "Статистика", headerStyle: {backgroundColor: '#8641f4'}}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{title: "Login", headerStyle: {backgroundColor: '#2a3162'}}}/>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    )
};