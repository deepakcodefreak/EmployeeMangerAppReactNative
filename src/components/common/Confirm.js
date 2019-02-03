import React from 'react';
import {View,Text,Modal} from 'react-native';
import {CardSection,Button} from './index'

const Confirm = ({children,visible,onAccept,onDecline})=>{
    const {containerStyle,textStyle,CardSectionStyle} = styles;
    return (
        <Modal
            transparent
            visible={visible}
            animationType="slide"
            onRequestClose={()=>{}}

        >
            <View style={containerStyle}>
                <CardSection style={CardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
    
                <CardSection style={CardSectionStyle}>
                    <Button onPress={onAccept}>
                        Yes
                    </Button>
                    <Button onPress={onDecline}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    )
}


const styles = {
    CardSectionStyle:{
        justifyContent:'center'
    },
    textStyle:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight:40
    },

    containerStyle:{
        backgroundColor:'rgba(0,0,0,0.75)',
        position:'relative',
        flex:1,
        justifyContent:'center'

    }    

}


export default Confirm;