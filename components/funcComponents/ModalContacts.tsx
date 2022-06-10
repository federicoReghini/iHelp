import React, { FunctionComponent, ReactElement } from 'react';

// native components
import { View, Text, Modal, TouchableOpacity, Image, TextInput, FlatList, AlertStatic } from 'react-native';
import * as Contacts from 'expo-contacts';

// styles
import { styles } from '../../styles';

// type
import type { contact } from '../../screens/SendHelp';

interface Props {
    handleModal: () => void,
    handleChange: (e: string) => void,
    handleAddContact: (contact: contact) => () => Promise<void | boolean | AlertStatic>,
    isModal: boolean,
    value: string,
    paramsContacts: Array<object>,
    contacts: Array<object>
}


const ModalContacts: FunctionComponent<Props> = ({ handleModal, handleChange, handleAddContact, isModal, value, paramsContacts, contacts }): ReactElement => {

    const filter: any = ({ name }: { name: string }): boolean => { //filter by name

        const string: string = value

        return name.startsWith(string)
    }

    const handleRender: any = ({ item }: { item: Contacts.Contact }, index: number): ReactElement | null => {  //render contacts

        if (item.phoneNumbers === undefined) {
            return null;
        }

        const contact: contact = {
            id: contacts ? contacts.length + 1 : 1,
            name: item.name,
            phoneNumber: item.phoneNumbers[0]?.number
        }

        return (
            <TouchableOpacity
                onPress={handleAddContact(contact)}
            >
                <View
                    style={styles.contactContainer}
                    key={index}
                >
                    <Image
                        source={require('../../assets/senseiboss.png')}
                        style={styles.contactImage}
                    />
                    <View>
                        <Text>
                            {contact.name}
                        </Text>
                        <Text>
                            {contact.phoneNumber}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <Modal
            transparent={false}
            visible={isModal}
        >

            <View
                style={styles.modalContainer}
            >
                <View
                    style={styles.position}
                >
                    <TouchableOpacity
                        style={styles.closeModalContainer}
                        onPress={handleModal}
                    >
                        <Image
                            style={styles.close}
                            source={require('../../assets/closeIcon.png')} />
                    </TouchableOpacity>

                </View>
                <TextInput
                    value={value}
                    onChangeText={handleChange}
                    placeholder='Search contact'
                    style={styles.textInput}
                />

                {
                    value === "" ?
                        <FlatList
                            style={styles.flatList}
                            data={paramsContacts}
                            renderItem={handleRender}
                        />
                        :
                        <FlatList
                            style={styles.flatList}
                            data={paramsContacts.filter(filter)}
                            renderItem={handleRender}
                        />
                }
            </View>

        </Modal>
    )
}

export default ModalContacts;