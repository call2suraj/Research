import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 255,
        marginTop: 5
    },
    header: {
        backgroundColor: '#e6e6e6', marginTop: 3, marginBottom: 5, color: 'black', padding: 10
    },
    nested_header: {
        backgroundColor: '#0c570a',
        height: 30,
        marginBottom: 5,
    },
    textstyle: {
        fontSize: 16,
        color: 'black'
    },
    button_style: { 
        backgroundColor: '#c20000', 
        width: 200, 
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    text_style: { 
        fontSize: 18, 
        color: 'white', 
        textAlign: 'center' 
    },
    red_text_style:{ 
        fontSize: 18, 
        color: 'red', 
        textAlign: 'center' 
    }
});