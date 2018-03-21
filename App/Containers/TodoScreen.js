import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Platform, Button, TextInput } from 'react-native'
import {Colors, Metrics} from '../Themes'
import { connect } from 'react-redux'
import TodoActions from '../Redux/TodoRedux'
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';


// Styles
import styles from './Styles/TodoScreenStyle'

class TodoScreen extends Component {
  constructor(props) {
    super(props)
    this._layoutProvider = new LayoutProvider(
      index => {
        return 0;
      },
      (type, dim) => {
        dim.width = Metrics.screenWidth;
        dim.height = 44;  
      }
    )    
    this.state = {
      dataProvider:this.mapToDataProvider(props)
    }
    
  }

  mapToDataProvider(props){
    let dataProvider = new DataProvider((r1, r2) => {
      return r1.id !== r2.id || r1.title !== r2.title || r1.is_complete !== r2.is_complete;
    });
    return dataProvider.cloneWithRows(
      Object.keys(props.todos).reduce((pre, value)=>{
        pre.push(props.todos[value])
        return pre
      },[])
    )
  }

  componentWillReceiveProps(nextProps){
    this.setState({dataProvider:this.mapToDataProvider(nextProps)}) 
  }

  rowRenderer(type, data) {
    return (
        <View >
            {/* <Text style={styles.sectionText}>{data.title}</Text> */}
            <View style={styles.groupContainer}>
              <Button
                  title="✓"
                  color={data.is_complete?Colors.green:Colors.charcoal}
                  onPress={()=>{
                    this.props.todoChange(data.id, {is_complete:!data.is_complete})
                  }}
                />
              <TextInput
                style={styles.cellContainer}
                placeholderTextColor={Colors.charcoal}
                placeholder="Task Name Here"
                onChangeText={(text) => {
                  this.props.todoChange(data.id, {title:text})
                }}
                value={data.title}
              />
              <Button
                  title="✖"
                  color={Colors.fire}
                  onPress={()=>{
                    this.props.todoDelete(data.id)
                  }}
                />
            </View>
        </View>
    );
  }


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
                  this.props.todoAdd()
                }}
              />
          </KeyboardAvoidingView>
        </View>
        <RecyclerListView 
          layoutProvider={this._layoutProvider} 
          dataProvider={this.state.dataProvider} 
          rowRenderer={this.rowRenderer.bind(this)} />
        <View style={styles.section} >
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
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos:state.todo.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    todoAdd:(title) => dispatch(TodoActions.todoAdd(title)),
    todoChange:(id, diff) => dispatch(TodoActions.todoChange(id, diff)),
    todoDelete:(id) => dispatch(TodoActions.todoDelete(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen)
