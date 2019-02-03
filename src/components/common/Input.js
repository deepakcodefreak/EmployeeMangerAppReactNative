import React from 'react';
import {TextInput,Text,View} from 'react-native';



const Input = (props)=> {

    const {secureTextEntry,placeholder,label,onChangeText,value} = props;
    const {inputStyle,labelStyle,containerStyle} = styles;

    
        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>
                    {label}
                </Text>
                <TextInput
                    secureTextEntry={secureTextEntry} 
                    placeholder={placeholder}
                    autoCorrect={false}
                    style={inputStyle} 
                    onChangeText={onChangeText} 
                    value={value}
                />
            </View>
        )
    
}

const styles = {
    inputStyle :{
        paddingLeft:5,
        paddingRight:5,
        flex:2,
        fontSize:18,
        color:'#000',
        lineHeight:23
    },
    labelStyle :{
        flex:1,
        fontSize:18,
        paddingLeft:20
    },
    containerStyle :{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
}





export {Input};