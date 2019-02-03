

import React from 'react';
import {View,Text} from 'react-native';

const Header = (props) => {
    const {viewStyle,textStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )

    
}

const styles = {
    textStyle:{
        fontSize:20
    },
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        height:60,
        backgroundColor:'blue',
        elevation:10,
        position:'relative',
    }

}

export {Header};
















