import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 30
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
        backgroundColor: '#0c570a', 
        height: 30, 
        marginTop: 3, 
        marginBottom: 5
    },
    nested_header: {
        //backgroundColor: '#1abc9c', 
        backgroundColor: '#0c570a',
        height: 30,
        marginBottom: 5,
    },
    button_style: {
        backgroundColor:'#c20000', 
        width: 200, 
        height: 50,
        alignItems:'center', 
        justifyContent:'center'
    },
    button_text: {
        fontSize: 18, 
        color:'white', 
        textAlign:'center'
    }
});