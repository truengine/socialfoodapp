import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const FoodTypeCard = () => {
  const {
    backgroundStyle,
     buttonStyle,
     btnViewStyle,
     textViewStyle1,
     textViewStyle2,
     textStyle } = styles;

    return (
        <View>
            <Image
                style={backgroundStyle}
                source={require('socialfoodapp/assets/images/Menu_bg.png')}
            />
            <View style={btnViewStyle}>
                <TouchableOpacity>
                    <Image
                        style={buttonStyle}
                        source={require('socialfoodapp/assets/images/Seafood_Button.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={buttonStyle}
                        source={require('socialfoodapp/assets/images/Meat_Button.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={buttonStyle}
                        source={require('socialfoodapp/assets/images/Veg_button.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={textViewStyle1}>
                <Text style={textStyle}>Seafood</Text>
                <Text style={textStyle}>Meat</Text>
                <Text style={textStyle}>Vegetarian</Text>
            </View>
            <View style={btnViewStyle}>
                <TouchableOpacity>
                    <Image
                        style={buttonStyle}
                        source={require('socialfoodapp/assets/images/Poultry_Button.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={buttonStyle}
                        source={require('socialfoodapp/assets/images/Dessert_Button.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={buttonStyle}
                        source={require('socialfoodapp/assets/images/Pasta_Button.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={textViewStyle2}>
                <Text style={textStyle}>Chicken</Text>
                <Text style={textStyle}>Dessert</Text>
                <Text style={textStyle}>Pasta</Text>
            </View>
        </View>
    );
};

const styles = {
    backgroundStyle: {
        height: 260,
        width: 365,
        marginTop: 5,
        position: 'absolute'
    },
    buttonStyle: {
        height: 80,
        width: 80,
        borderRadius: 10
    },
    btnViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20
    },
    textViewStyle1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 68,
        marginRight: 55
    },
    textViewStyle2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 65,
        marginRight: 75
    },
    textStyle: {
        fontFamily: 'gillsans',
        fontSize: 15
    }
};

export { FoodTypeCard };
