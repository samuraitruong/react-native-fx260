import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import  Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  lcd: {
    fontSize : 30,
    backgroundColor: 'blue',
    color: 'white',
    padding:20,
    fontFamily: 'STIX2Math'
  },
  keyboard: {
    flex: 1,
    
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  keyboardButton: {
    padding: 15,
    height: 40
  },
  keyboardButtonText: {
    fontSize: 28
  },
  keyboardKeyWrap: {
    flex: 1/6,
    margin: 15,
  },
  shiftText: {
    color: Colors.darkOrange,
    fontSize:24,
    height:30,
    alignSelf: 'stretch',
    textAlign:'center'
  }
})
