import React, { useState, useEffect, FunctionComponent } from 'react';

// native components
import { Alert, View, Linking, AlertStatic } from 'react-native';
import * as SMS from 'expo-sms';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// utils
import { setStorage, getStorage, clearStorage } from '../utils/storage';

// styles
import { styles } from '../styles';
import Map from '../components/funcComponents/Map';
import Buttons from '../components/funcComponents/Buttons';
import Angels from '../components/funcComponents/Angels';
import ModalContacts from '../components/funcComponents/ModalContacts';

// interface & type
interface State {
    isModal: boolean,
    contacts: Array<object>,
    value: string
}

type optionalContact = {
    id?: number,
    name?: string,
    phoneNumber?: string | undefined
}

type state = {
    isModal: boolean,
    contacts: Array<object>,
    value: string
}
export type contact = {
    id: number,
    name: string,
    phoneNumber: string | undefined
}

const initState = {
    isModal: false,
    contacts: [],
    value: ''
}

type coords = {
    coords: {
        latitude: number,
        longitude: number
    }
}

export type position = {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}

type RootStackParamList = {
    SendHelp: { contacts: Array<object>, location: coords };
};

type Props = NativeStackScreenProps<RootStackParamList, 'SendHelp'>;

const SendHelp: FunctionComponent<Props> = ({ route }) => {

    const [state, setState] = useState<State>(initState);

    const position: position = {
        latitude: route.params.location.coords.latitude,
        longitude: route.params.location.coords.longitude,
        latitudeDelta: 0.004,
        longitudeDelta: 0.0421,
    }

    useEffect(() => {
        (async (): Promise<void> => {
            setState({
                ...state,
                contacts: await getStorage('contacts')
            })
        })();
    }, []);

    const handleDeleteContact = (id: string) => async (): Promise<void> => { //delete a contact from favorites

        const idNumber: number = parseInt(id);

        const contacts: Array<Object> = await getStorage('contacts');

        const index: number = contacts.map(({ id }: any): number => {
            return id;

        }).indexOf(idNumber);

        contacts.splice(index, 1);

        await setStorage('contacts', contacts);

        setState({
            ...state,
            contacts
        })

        Alert.alert('Your angel flew away')
    }

    const handleAddContact = (contact: contact) => async (): Promise<void | boolean | AlertStatic> => { //add contact to favorites

        let newState: state = Object.assign({}, state);
        const storage: Array<contact> = await getStorage('contacts');

        newState.contacts = [];

        if (storage) {  //  if contact already added or are more then 5 return else setStorage
            const exist: Array<contact> = storage.filter((item): boolean | undefined => {

                if (item.name.includes(contact.name)) return true;
            });

            if (exist.length > 0) return Alert.alert('Already added');

            if (storage.length === 5) return Alert.alert('You can have only five favorites');

            storage.push(contact);
            await setStorage('contacts', storage);

        } else {

            newState.contacts.push(contact);
            await setStorage('contacts', newState.contacts);

        }

        setState({
            ...newState,
            contacts: await getStorage('contacts')
        })
    }

    const handleModal = (): void => { //open close modal
        setState({
            ...state,
            isModal: !state.isModal,
            value: ''
        })
    }

    const handleSend = async (): Promise<void | AlertStatic> => { // send sms and whatsapp to favorites contacts
        if (state.contacts.length === 0) return Alert.alert('Oh boy! you need to add some angels first!');

        let contact: optionalContact;
        const whatsAppMessage: string = `Oh Boy, i need help! i'm here: https://www.google.com/maps/search/?api=1&query=${position.latitude},${position.longitude}`;
        const number: string[] = state.contacts.map(({ phoneNumber }: any) => phoneNumber);

        const isAvailable = await SMS.isAvailableAsync();

        if (isAvailable) {
            await SMS.sendSMSAsync(
                number,
                whatsAppMessage,
            );
        }
        
        for (contact of state.contacts) {

            let URL: string = `whatsapp://send?text=${whatsAppMessage}&phone=${contact.phoneNumber}`;

            Linking.openURL(URL)
        }
    }

    const handleChange = (e: string): void => { // input change callback
        setState({
            ...state,
            value: e
        })
    }

    const handleClear = async (): Promise<void | null> => { //clear favorites
        if (state.contacts.length === 0) {
            return null;
        }
        await clearStorage();
        setState({
            ...state,
            contacts: []
        })
        Alert.alert('Oh boy! you burnt your guardian angels! ');
    }

    return (
        <View
            style={styles.sendHelpContainer}
        >
            <Map position={position} />

            <Angels contacts={state.contacts} handleDeleteContact={handleDeleteContact} handleClear={handleClear} />

            <Buttons handleModal={handleModal} handleSend={handleSend} />

            <ModalContacts
                handleModal={handleModal}
                handleChange={handleChange}
                handleAddContact={handleAddContact}
                isModal={state.isModal}
                value={state.value}
                paramsContacts={route.params.contacts}
                contacts={state.contacts}
            />

        </View>
    )
}

export default SendHelp;