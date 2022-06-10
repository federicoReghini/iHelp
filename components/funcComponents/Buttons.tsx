import React, { FunctionComponent, ReactElement } from 'react';

// native components
import { AlertStatic, Text, TouchableOpacity } from 'react-native';

// styles
import { styles } from '../../styles';

interface Props {
    handleModal: () => void,
    handleSend: () => Promise<void | AlertStatic>
}

const Buttons: FunctionComponent<Props> = ({ handleModal, handleSend }): ReactElement => {
    return (
        <>
            <TouchableOpacity
                style={styles.btnAdd}
                onPress={handleModal}
            >
                <Text
                    style={[styles.help, styles.title]}
                >
                    Add Contacts
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={handleSend}
            >
                <Text
                    style={[styles.help, styles.title]}
                >
                    S.o.S someone help me
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default Buttons;