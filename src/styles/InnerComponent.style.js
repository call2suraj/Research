import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerRight: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderWidth: 1,
        paddingTop: 25,
        flex: 1,
        margin: 5,
        paddingLeft: 0,
    },
    iconStyleRight: {
        paddingLeft: 350,
        textAlign: 'right',
        paddingTop: 1,
        color: 'black',
    },
    iconStyleLeft: {
        paddingLeft: 33,
        textAlign: 'right',

        marginRight: 10,
        color: 'white',
    },
    text_style: { 
        color: 'black', 
        padding: 10 
    },
    main_view: { 
        borderWidth: 0, 
        flexDirection: 'column', 
        paddingLeft: 5 
    }
});