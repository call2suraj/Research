import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styles/Accordion.style';

const Accordion: React.FC<Props> = (props: Props) => {
    const y_translate = useRef(new Animated.Value(0)).current;
    const [isHidden, setIsHidden] = useState(true);

    const onPress = () => {
        setIsHidden(!isHidden);
        if (isHidden) {
            {
                y_translate.setValue(0);
                Animated.spring(
                    y_translate,
                    {
                        toValue: 1,
                        friction: 3,
                        useNativeDriver: false
                    }
                ).start();
            }
        } else {
            {
                y_translate.setValue(1);
                Animated.spring(
                    y_translate,
                    {
                        toValue: 0,
                        friction: 4,
                        useNativeDriver: false
                    }
                ).start();
            }
        }
    }

    const menu_moveY = y_translate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 50]
    });
    console.log('onPress ' + isHidden)
    return (
        <View style={styles.topContainer} >
            <TouchableOpacity style={[styles.innerContainer, { backgroundColor: props.bgcolor }]}
                onPress={() => onPress()}>
                <Text style={styles.textStyle}
                >
                    {props.headerText}
                </Text>
                {
                    isHidden ?
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
            {isHidden ? null :
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
                        <ScrollView>
                            {props.headerBody}
                        </ScrollView>
                    </Animated.View>
                </View>
            }
        </View>
    );
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
