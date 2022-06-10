import React, { FunctionComponent, ReactElement } from 'react';

// native components
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

// styles
import { styles } from '../../styles';

interface Props {
    handleClear(): Promise<void | null>,
    handleDeleteContact: (id: string) => () => Promise<void>,
    contacts: Array<object>
}

const Angels: FunctionComponent<Props> = ({ handleClear, contacts, handleDeleteContact }): ReactElement => {


    const renderContact: any = ({ name, id }: { name: string, id: number }, index: number): ReactElement => { //render contact

        const idString = id.toString();

        return (
            <View key={index}>
                {
                    contacts.length !== 0 ?

                        <View>
                            <View
                                style={styles.direction}
                            >
                                <Image
                                    source={require('../../assets/senseiold.png')}
                                    style={styles.contactImage}
                                />
                                <View style={styles.deleteContainer}>
                                    <Text
                                        style={styles.title}>
                                        {name}
                                    </Text>

                                    <TouchableOpacity
                                        onPress={handleDeleteContact(idString)}
                                    >
                                        <Image
                                            style={styles.close}
                                            source={require('../../assets/closeIcon.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        :
                        <View>
                            <Text
                                style={styles.title}
                            >
                                Click on add to have angels
                            </Text>
                        </View>

                }
            </View>
        )
    }

    return (
        <>
            <View
                style={styles.addContactContainer}
            >
                <Text style={styles.title}>
                    Your angels
                </Text>

                {
                    contacts &&
                    <TouchableOpacity
                        onPress={handleClear}
                        style={styles.fireImage}
                    >

                        <Image

                            source={require('../../assets/fire.png')}
                            style={styles.fireImage}
                        />
                    </TouchableOpacity>
                }

                <View style={styles.scrollViewContainer}>

                    <ScrollView
                        horizontal={true}
                        style={styles.contactAdded}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            contacts && contacts.map(renderContact)
                        }
                    </ScrollView>
                </View>

            </View>
        </>
    )
}

export default Angels