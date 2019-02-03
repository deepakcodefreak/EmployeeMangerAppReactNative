import React from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card,CardSection,Button } from './common';
import {EmployeeUpdate,EmployeeSave,EmployeeDelete} from '../actions'
import _ from 'lodash';
import Communications from 'react-native-communications';
import Confirm from './common/Confirm';

class EmployeeEdit extends React.Component{

    state={modalVisible:false}

    componentDidMount(){
        _.each(this.props.employee,(value,props)=>{
            this.props.EmployeeUpdate({props,value})
        })
    }

    onButtonPress = ()=>{
        const {name,phone,shift,id} = this.props;
        this.props.EmployeeSave({name,phone,shift,id})
    }

    onTextButtonPress = ()=>{
        const {phone,shift} = this.props;
        Communications.text(phone,`Your shift is on ${shift}`)
    }

    onAccept = ()=>{
        // console.log(this.props.employee.id)
        this.props.EmployeeDelete({id:this.props.employee.id})
        this.setState({modalVisible:false})
    }

    onDecline = ()=>{
        this.setState({modalVisible:false})
    }

    render(){
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextButtonPress}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={()=>this.setState({modalVisible:!this.state.modalVisible})}>
                        Fire Employee
                    </Button>
                </CardSection>

                    <Confirm 
                        visible={this.state.modalVisible}
                        onAccept={this.onAccept}
                        onDecline={this.onDecline}
                    >
                      Are you sure you want to fire him?  
                    </Confirm>

            </Card>
        )
    }
}


const mapStateToProps = (state)=>{
    const {name,phone,shift,id} = state.employee;
    return {name,phone,shift,id};
}


export default connect(mapStateToProps,{EmployeeDelete,EmployeeUpdate,EmployeeSave})(EmployeeEdit);
