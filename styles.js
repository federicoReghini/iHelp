import { PixelRatio, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#44403C"
      },
      imageStyle: {
        height: PixelRatio.getPixelSizeForLayoutSize(150),
        width: '100%',
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        marginHorizontal: 30
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 17,
        textAlign: 'center',
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#0898A0',
        marginLeft: 10,
    },
    navigation: {
        position: 'absolute',
        bottom: 0,
        left: '80%',
        right: 0,
        width: 40,
        height: 40
    },
    navigationText: {
        color: '#61B5D9',
        fontSize: 18
    },
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeTitle:{
        fontSize: 30,
        color: '#44403C',
        textAlign: 'center'
    },
    image: {
        flex: .8,
        justifyContent: "center",
        width: '100%'
    },
    sendHelpContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#44403C'
    },
    map: {
        marginTop: 10,
        width: '100%',
        height: 150,
        marginBottom: 40
    },
    title: {
        fontSize: 25,
        color: '#FFF9F5',
        textAlign: 'center',
    },
    btn: {
        marginTop: 30,
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#B12009',
        width: '90%'
    },
    help: {
        color: '#FFF9F5',
        textAlign: 'center'
    },
    contactImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 20
    },
    contactContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        borderBottomWidth: 2,
        width: '70%',
        paddingBottom: 8,
        borderBottomColor: '#b12009'
    },
    direction:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 6
    },
    addContactContainer: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        height: '30%',
        marginBottom: 20,
    },
    fireImage:{
        position: 'absolute',
        top: 2,
        right: 5,
        width: 30,
        height: 35
    },
    btnAdd: {
        marginTop: 10,
        padding: 10,
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#3dd362'
    },
    addContactText: {
        textAlign: 'center',
        color: '#FFF9F5',
        fontSize: 30
    },
    contactAdded: {
        display: 'flex',
        flexDirection: 'row',
    },
    modalContainer: {
        flex: 1,
        margin: 10,
    },
    close: {
        marginRight: 15,
        marginLeft: 15,
        width: 30,
        height: 30
    },
    closeModalContainer: {
        position: 'absolute',
        top: 10,
        right: 30,
        width: 40,
        height: 40
    },
    scrollViewContainer: {
        marginTop: 30,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatList: {
        position: 'relative',
        top: 30
    },
    textInput: {
        marginTop: 60,
        borderWidth: 1,
        position: 'relative',
        alignSelf: 'center',
        width: '50%',
        borderRadius: 20,
        textAlign: 'center'
    },
    position: {
        position: 'relative'
    },
    viewContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
