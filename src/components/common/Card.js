import React from 'react';
import {View} from 'react-native';

const Card = (props) =>{
    const {containerStyle} = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    )
}



const styles = {
    containerStyle:{
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        marginTop:5,
        elevation:5,
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        shadowColor:'#000',
        borderBottomWidth:0,
    }
}


export {Card};