import { StyleSheet } from 'react-native';

export default StyleSheet.create({
iconStyleRight: {
    paddingLeft: 1,
    paddingRight: 1,
    textAlign: 'right',
    paddingTop: 6,
    color: 'black',
},
topContainer: {
    borderWidth: 0,
    width: 400,
    flexDirection: 'column',
    backgroundColor: 'white',
    margin: 0,
},
innerContainer: {
    borderWidth: 0,
    width: 412,
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    margin: 0,
    height: 48,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#D1D1D1',
},
lowerContainer: {
    borderWidth: 0,
    width: 412,
    marginBottom: 0,
    flexDirection: 'column',
    marginTop: 0,
    marginLeft: 0,

},
textStyle: {
    color: '#252525',
    paddingLeft: 16,
    fontSize: 15,
    textAlign: 'left',
    paddingTop: 13,
    width: 375,
    fontFamily: 'Roboto',
    fontWeight: '500',
},
footer_menu: {
    position: 'absolute',
    width: 410,
    height: 200,
    bottom: -150,
    backgroundColor: '#1e5aa3',
    alignItems: 'center'
},

});