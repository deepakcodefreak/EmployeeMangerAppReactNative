import React from 'react';
import {View,Text} from 'react-native';
import {CardSection,Button,Input} from './common'
import Spinner from './common/Spinner';
import {EmailChanged,PasswordChanged,LogIn} from '../actions'
import {connect} from 'react-redux';


class LoginForm extends React.Component{

    onEmailChange = (text)=>{
      console.log(text);
      this.props.EmailChanged(text);
    }

    onPasswordChange = (text)=>{
        console.log(text);
        this.props.PasswordChanged(text);
    }

    onPressLogIn = ()=>{
        const {email,password} = this.props;
        this.props.LogIn({email,password});
    }

    renderError = () => {
        console.log(this.props.error)
        if(this.props.error){
            return (
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }

    renderButton = ()=>{
        if(this.props.loading){
            return <Spinner size='large'/>
        }

        return (
            <Button onPress={this.onPressLogIn}>
             LogIn
           </Button>
        )
    }

    render(){
        // console.log(this.props)
        return (
            <View>
                <CardSection>
                    <Input
                      placeholder="email@example.com"
                      label="Enter Email"
                      onChangeText = {this.onEmailChange}
                      value = {this.props.email} 
                    />
                </CardSection>
                 
                <CardSection>
                    <Input
                      placeholder="password"
                      label="Enter password"
                      secureTextEntry
                      onChangeText = {this.onPasswordChange}
                      value = {this.props.password}
                    />

                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {email:state.auth.email,password:state.auth.password,error:state.auth.error,loading:state.auth.loading}
}


const styles = {
    errorTextStyle:{
        fontSize:20,
        color:'red',
        alignSelf:'center'
        
    }
}


export default connect(mapStateToProps,{EmailChanged,PasswordChanged,LogIn})(LoginForm);