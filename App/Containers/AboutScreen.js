import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Button, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutScreenStyle'

class AboutScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
        <View style={styles.section} >
          <KeyboardAvoidingView behavior='position'>
            <Text style={styles.sectionText}>AboutScreen</Text>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
