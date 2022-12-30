import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignContent:'center',
        justifyContent:'center',
        alignContent:'center',
    },
    ordinary_button: {
        backgroundColor: '#ff5722',
    },
    animated_button: {
        backgroundColor: '#ff5722'
    },
    button_label: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: '#0c570a', height: 30, marginTop: 3, marginBottom: 5
    },
    nested_header: {
        //backgroundColor: '#1abc9c', 
        backgroundColor: '#0c570a',
        height: 30,
        marginBottom: 5,
    }
});