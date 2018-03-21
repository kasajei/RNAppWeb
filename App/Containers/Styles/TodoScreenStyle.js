import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  cellContainer :{
    height: 40, 
    color: Colors.snow,
    borderColor: Colors.snow, 
    borderWidth: 1,
    flex:0.8
  }
})
