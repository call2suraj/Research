import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor:'#f2f2f2', 
        height: 150,
        borderRadius:4,
        marginBottom: 15,
    },
    ordinary_button: {
        backgroundColor: '#ff5722',
    },
    animated_button: {
        backgroundColor: 'white'
    },
    button_label: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: '#e6e6e6',  
        marginTop: 3, 
        marginBottom: 5, 
        color:'black', 
        padding: 10,
    },
    nested_header: {
        backgroundColor: '#e6e6e6',
        padding: 10
    },
    text_view: { 
        flexDirection: 'row', 
        paddingTop: 1, 
        backgroundColor:'#f2f2f2' 
    },
    animated_button: {
        fontSize: 18, 
        color:'white', 
        textAlign:'center', 
        padding: 8
    }
});