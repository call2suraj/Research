import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Animated, LogBox } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
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
class Accordion extends Component {
    constructor(props) {
        super(props);
        this.y_translate = new Animated.Value(0);
        this.state = { isHidden: this.props.isCollapse || false };
    }
    
    onPress() {
        this.setState({ isHidden: !this.state.isHidden });
        if (this.state.isHidden) {
            {
                this.y_translate.setValue(0);
                Animated.spring(
                    this.y_translate,
                    {
                        toValue: 1,
                        friction: 3,
                        useNativeDriver: false
                    }
                ).start();
            }
        } else {
            {
                this.y_translate.setValue(1);
                Animated.spring(
                    this.y_translate,
                    {
                        toValue: 0,
                        friction: 4,
                        useNativeDriver: false
                    }
                ).start();
            }
        }
    }
  
    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }

    render() {
        const menu_moveY = this.y_translate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 50]
        });
        console.log('onPress ' + this.state.isHidden)
        return (
            <View style={styles.topContainer} >
                <TouchableOpacity style={[styles.innerContainer, { backgroundColor: this.props.bgcolor }]}
                    onPress={() => this.onPress()}>
                    <Text style={styles.textStyle}
                    >
                        {this.props.headerText}
                    </Text>
                    {
                        this.state.isHidden ?
                            <Icon
                                name="expand-more"
                                size={30}
                                style={styles.iconStyleRight}
                            /> :
                            <Icon
                                name="expand-less"
                                size={30}
                                style={styles.iconStyleRight}
                            />
                    }
                </TouchableOpacity>
                {this.state.isHidden ? null :
                    <View
                        style={styles.lowerContainer}
                    >
                        <Animated.View
                            style={[
                                styles.footer_menu,
                                {
                                    transform: [
                                        {
                                            translateY: menu_moveY
                                        }
                                    ]
                                }
                            ]}
                        >
                            <ScrollView style={{ marginTop: 0, width:'98%' }}>
                                {this.props.headerBody}
                            </ScrollView>
                        </Animated.View>
                    </View>
                }
            </View>
        );
    }
}

Accordion.propTypes = {
    isCollapse: PropTypes.bool,
    headerText: PropTypes.string,
    headerBody: PropTypes.node,
    bgcolor: PropTypes.string,
};
Accordion.defaultProps = {
    isCollapse: false,
    headerText: ' ',
    headerBody: <View />,
    bgcolor: 'white'
};
export default Accordion;
