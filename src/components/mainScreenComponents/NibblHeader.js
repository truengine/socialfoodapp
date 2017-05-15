import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const NibblHeader = ({ onPress }) => {
    const { logoStyle, viewStyle, burgerStyle, searchStyle } = styles;

    return (
        <View style={viewStyle}>
            <TouchableOpacity onPress={onPress}>
                <Image
                    style={burgerStyle}
                    source={require('socialfoodapp/assets/images/Burger.png')}
                />
            </TouchableOpacity>
            <Image
                style={logoStyle}
                source={require('socialfoodapp/assets/images/header_logo.png')}
            />
            <TouchableOpacity>
                <Image
                    style={searchStyle}
                    source={require('socialfoodapp/assets/images/Search_button.png')}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#878F91',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logoStyle: {
        height: 42,
        width: 147,
        marginTop: 10,
        marginBottom: 10
    },
    burgerStyle: {
        height: 22,
        width: 40,
        marginLeft: 20
    },
    searchStyle: {
        height: 40,
        width: 50,
        marginRight: 20
    }
};

export { NibblHeader };
