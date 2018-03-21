import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Platform, Button } from 'react-native'
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
      return r1.id !== r2.id;
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

  _rowRenderer(type, data) {
    return (
        <View >
            <Text style={styles.sectionText}>{data.title}</Text>
        </View>
    );
  }


  render () {    
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
        <View style={styles.section} >
          <KeyboardAvoidingView behavior='position'>
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
            <Text style={styles.sectionText}>TodoScreen</Text>
            <Button
                title="Add Task"
                color={Colors.fire}
                onPress={()=>{
                  this.props.todoAdd("Test Todo")
                }}
              />
          </KeyboardAvoidingView>
          </View>
          <RecyclerListView 
            layoutProvider={this._layoutProvider} 
            dataProvider={this.state.dataProvider} 
            rowRenderer={this._rowRenderer.bind(this)} />
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
    todoAdd:(title) => dispatch(TodoActions.todoAdd(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen)
