import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';

// native components
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Location from 'expo-location';
import * as Contacts from 'expo-contacts';

// styles
import { styles } from '../styles';

// interface & type
interface State {
    location: any,
    errorMsg: string,
    hasPermission: boolean,
    contacts: Array<Contacts.Contact>
}

type state = {
    location: any,
    errorMsg: string,
    hasPermission: boolean,
    contacts: Array<Contacts.Contact>
}

type RootStackParamList = {
    SendHelp: { contacts: object, location: object } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const initState = {
    location: null,
    hasPermission: false,
    errorMsg: '',
    contacts: []
}

const Help: FunctionComponent<Props> = ({ navigation }): ReactElement => {

    const [state, setState] = useState<State>(initState);

    useEffect(() => {
        (async (): Promise<void | null> => {
            const newState: state = Object.assign({}, state);

            const [contactsPerms, location, { data }] = await Promise.all([
                Contacts.getPermissionsAsync(),
                Location.getCurrentPositionAsync({}),
                Contacts.getContactsAsync()
            ]);

            newState.hasPermission = contactsPerms.granted;

            if (!newState.hasPermission) {
                newState.errorMsg = 'Permission was denied';
                return null;

            } else {
                newState.location = location;
                newState.contacts = data;
                newState.hasPermission = true;
            }

            setState({ ...newState });
        })();
    }, []);

    const handleNavigation = (contacts: Array<object>) => (): void => {
        navigation.navigate('SendHelp', {
            contacts: contacts,
            location: state.location
        });
    }

    return (
        <View style={styles.homeContainer}>
            {
                state.hasPermission ?
                    <ImageBackground
                        source={require('../assets/sensei.png')}
                        resizeMode="cover"
                        style={styles.image}
                    >

                        <Text
                            style={styles.title}
                        >
                            Help!
                        </Text>

                        <View style={styles.viewContainer}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={handleNavigation(state.contacts)}
                            >
                                <Text
                                    style={[styles.help, styles.title]}
                                >
                                    Not just anybody
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                    :
                    <Text>
                        {state.errorMsg}
                    </Text>
            }
        </View>
    )
}

export default Help;