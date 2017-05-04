import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const BottomHalfMenu = ({ onPress }) => {
    const {
      viewStyle,
       textStyle,
        textViewStyle,
         timerViewStyle,
          logoStyle,
           textStyleTime,
            timeTextViewStyle } = styles;

    return (
        <View>
            <View style={textViewStyle}>
                <Text style={textStyle}>Time Ive Got</Text>
            </View>
            <View style={timerViewStyle}>
                <TouchableOpacity>
                    <Image
                        source={require('socialfoodapp/assets/images/30mins_btn.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('socialfoodapp/assets/images/45mins_btn.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('socialfoodapp/assets/images/60mins_btn.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={timeTextViewStyle}>
                <Text style={textStyleTime}>30 mins</Text>
                <Text style={textStyleTime}>45 mins</Text>
                <Text style={textStyleTime}>60 mins</Text>
            </View>
            <View style={viewStyle}>
                <TouchableOpacity onPress={onPress}>
                    <Image
                        style={logoStyle}
                        source={require('socialfoodapp/assets/images/Findrecipes_btn.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    viewStyle: {
        alignItems: 'center',
        marginTop: 15
    },
    textViewStyle: {
        alignItems: 'center',
        marginTop: 25
    },
    timerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 60,
        marginRight: 60
    },
    textStyle: {
        fontFamily: 'gillsans_bold',
        fontSize: 25
    },
    logoStyle: {
        height: 50,
        width: 200
    },
    textStyleTime: {
        fontFamily: 'gillsans',
        fontSize: 15
    },
    timeTextViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 65,
        marginRight: 65
    }
};


export { BottomHalfMenu };
