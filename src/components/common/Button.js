import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

const Button = ({onPress,children})=>{
    const {buttonStyle,buttonTextStyle} = styles;
    return (
            <TouchableOpacity style={buttonStyle} onPress={onPress}>
                    <Text style={buttonTextStyle}>
                        {children}
                    </Text>
            </TouchableOpacity>
    )
}



const styles = {
    
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        borderColor:'blue',
        borderRadius:5,
        backgroundColor:'#fff',
        borderWidth:1,
        marginLeft:5,
        marginRight:5
    },
    buttonTextStyle:{
        alignSelf:'center',
        color:'black',
        fontSize:20,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    }
}


export {Button};