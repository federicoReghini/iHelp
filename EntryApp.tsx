import React, { FC, useState, useEffect, ReactElement } from 'react';

// native components
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import * as Contacts from 'expo-contacts';
import { Alert, Text, View } from 'react-native';

// screens
import Home from './screens/Home';
import Help from './screens/Help';
import SendHelp from './screens/SendHelp';
import Tutorial from './screens/Tutorial';

interface State {
    errorMsg: string,
    hasPermission: boolean
}

const initState = {
    errorMsg: '',
    hasPermission: false
}

type RootStackParamList = {
    Home: undefined;
    Tutorial: undefined;
    Help: undefined;
    SendHelp: undefined;
};

const EntryApp: FC = (): ReactElement => {

    const Stack = createStackNavigator<RootStackParamList>();

    const [state, setState] = useState<State>(initState)

    useEffect(() => {
        (async (): Promise<void | null> => {
            const newState = Object.assign({}, state);

            const [locationPermission, contactsPermission] = await Promise.all([
                Location.requestForegroundPermissionsAsync(),
                Contacts.requestPermissionsAsync()
            ])            

            if ((locationPermission.status && contactsPermission.status) !== 'granted') {
                newState.errorMsg = 'Permission was denied';
                Alert.alert(newState.errorMsg)
                return null;
            } else {                
                newState.hasPermission = true;
            }

            setState({ ...newState });
        })();
    }, []);

    return (
        <>
            {
                state.hasPermission ?
                    <NavigationContainer>
                        <Stack.Navigator
                            initialRouteName={'Tutorial'}
                        >

                            <Stack.Screen
                                name='Tutorial'
                                component={Tutorial}
                                options={
                                    {
                                        title: 'Tutorial',
                                        headerStyle: {
                                            backgroundColor: '#fff',
                                        },
                                        headerTintColor: '#44403C',
                                        headerTitleAlign: 'center',
                                        headerTitleStyle: {
                                            fontWeight: 'bold',
                                            fontSize: 24,
                                        }
                                    }
                                }
                            />

                            <Stack.Screen
                                name='Home'
                                component={Home}
                                options={
                                    {
                                        title: 'Home',
                                        headerStyle: {
                                            backgroundColor: '#fff',
                                        },
                                        headerTintColor: '#44403C',
                                        headerTitleAlign: 'center',
                                        headerTitleStyle: {
                                            fontWeight: 'bold',
                                            fontSize: 24,
                                        }
                                    }
                                }
                            />

                            <Stack.Screen
                                name='Help'
                                component={Help}
                                options={
                                    {
                                        title: 'Help',
                                        headerStyle: {
                                            backgroundColor: '#fff',
                                        },
                                        headerTintColor: '#44403C',
                                        headerTitleAlign: 'center',
                                        headerTitleStyle: {
                                            fontWeight: 'bold',
                                            fontSize: 24,
                                        }
                                    }
                                }
                            />

                            <Stack.Screen
                                name='SendHelp'
                                component={SendHelp}
                                options={
                                    {
                                        title: 'SendHelp',
                                        headerStyle: {
                                            backgroundColor: '#fff',
                                        },
                                        headerTintColor: '#44403C',
                                        headerTitleAlign: 'center',
                                        headerTitleStyle: {
                                            fontWeight: 'bold',
                                            fontSize: 24,
                                        }
                                    }
                                }
                            />

                        </Stack.Navigator>
                    </NavigationContainer>
                    :
                    <View>
                        <Text>{state.errorMsg}</Text>
                    </View>
     }
        </>
    )
}

export default EntryApp;