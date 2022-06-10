import React, { FunctionComponent, ReactElement } from 'react';

// native components
import { Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// styles
import { styles } from '../../styles';

interface Props {
    position: {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    }
}

const Map: FunctionComponent<Props> = ({ position }): ReactElement => {
    return (
        <>
            <Text
                style={
                    styles.title
                }
            >
                Your location
            </Text>
            <MapView
                style={styles.map}
                region={position}
            >
                <Marker
                    coordinate={position}
                    title='gotcha'
                />
            </MapView>
        </>
    )
}

export default Map;