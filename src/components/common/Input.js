import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  returnKeyType,
  onSubmitEditing
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          returnKeyType={returnKeyType}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType={keyboardType}
          onSubmitEditing={onSubmitEditing}
        />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    flex: 2
  },
  lableStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
