import React, { FunctionComponent, ReactElement } from 'react';

// native components
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// styles
import { styles } from '../styles';

type RootStackParamList = {
    Help: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const Home: FunctionComponent<Props> = ({ navigation }): ReactElement => {

    const handleNavigation = (): void => {
        navigation.navigate('Help');
    }

    return (
        <View style={styles.homeContainer}>

            <Text
                style={styles.homeTitle}
            >
                Help!
            </Text>

            <TouchableOpacity
                style={styles.btn}
                onPress={handleNavigation}
            >
                <Text
                    style={[styles.help, styles.title]}
                >
                    I need somebody
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;