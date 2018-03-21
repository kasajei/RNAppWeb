import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Platform, Button } from 'react-native'
import {Colors} from '../Themes'
import { connect } from 'react-redux'
import TodoActions from '../Redux/TodoRedux'

// Styles
import styles from './Styles/TodoScreenStyle'

class TodoScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
        <View style={styles.section} >
          <KeyboardAvoidingView behavior='position'>
            <Text style={styles.sectionText}>TodoScreen</Text>
            <Button
                title="Add Task"
                color={Colors.fire}
                onPress={()=>{
                  this.props.todoAdd("Test Todo")
                }}
              />
            <Button
                title="Go Back"
                color={Colors.charcoal}
                onPress={()=>{
                  if (Platform.OS == "web"){
                    this.props.history.goBack()
                  }else{
                    this.props.navigation.goBack()
                  }
                }}
              />
          </KeyboardAvoidingView>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    todoAdd:(title) => dispatch(TodoActions.todoAdd(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen)
