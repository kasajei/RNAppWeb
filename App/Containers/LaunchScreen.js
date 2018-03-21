import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, Platform } from 'react-native'
import { Images, Colors } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText}>
            Hello World
            </Text>
            <Button
              title="ToDo"
              color={Colors.fire}
              onPress={()=>{
                if (Platform.OS == "web"){
                  this.props.history.push("/todo")
                }else{
                  this.props.navigation.navigate("TodoScreen")
                }
              }}
            />
            <Button
              title="Learn More"
              color={Colors.charcoal}
              onPress={()=>{
                if (Platform.OS == "web"){
                  this.props.history.push("/about")
                }else{
                  this.props.navigation.navigate("AboutScreen")
                }
              }}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
