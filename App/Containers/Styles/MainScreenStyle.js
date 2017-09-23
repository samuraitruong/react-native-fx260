import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import  Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainLCD: {
    backgroundColor: Colors.ldcBackground,
    borderBottomWidth: 4,
    borderBottomColor: 'red'
  },
  lcd: {
    fontSize : 40,
    color: 'white',
    paddingLeft:Metrics.doubleBaseMargin,
    paddingRight:Metrics.doubleBaseMargin,
    paddingBottom: Metrics.baseMargin,
    //fontFamily: 'STIXTwoMath'
  },
  keyboard: {
    flex: 1,
    
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexGrow:1,
    flexShrink: 1,
  },
  keyboardButton: {
    flex:2,
    backgroundColor:Colors.cloud,
    justifyContent: 'center',
    alignItems: 'center'    
    //alignSelf:'stretch',

  },
  keyboardButtonText: {
    fontSize: 35,
    fontWeight:'bold'
  },
  keyboardKeyWrap: {
    flex: 1/6,
    margin: 10,
    //backgroundColor:'red',
    flexDirection:'column',
    //justifyContent : 'center'
    
  },
  shiftText: {
    color: Colors.darkOrange,
    fontSize:24,
    height:30,
    alignSelf: 'stretch',
    textAlign:'center'
  },
  indicator: {
    paddingLeft:Metrics.doubleBaseMargin,
    paddingLeft:Metrics.doubleBaseMargin,
    flexDirection: 'row'
  },
  indicatorText: {
    fontSize: 18,
    fontWeight:'bold',
    color: Colors.darkOrange, 
    marginRight: Metrics.baseMargin
  },
  indicatorTextDisabled: {
    fontSize: 18,
    color: Colors.brown,
    marginRight: Metrics.baseMargin
  }
})
