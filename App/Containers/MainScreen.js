import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, TouchableOpacity  } from 'react-native'
import { connect } from 'react-redux'
import Keyboard from '../Keyboard'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MainScreenStyle'

class MainScreen extends Component {
  renderRowKeys(keys) {
    const buttons =  keys.map(key => {
      return (
        <View key={key.shift + key.normal} style={styles.keyboardKeyWrap}>
          <Text style={styles.shiftText}>{key.shift}</Text>
          <TouchableOpacity  title={key.normal} style={styles.keyboardButton}><Text style={styles.keyboardButtonText}>{key.normal}</Text></TouchableOpacity >
        </View>
      )
    });
    return (
      <View style={styles.keyboardRow}>
      {buttons}
      </View>
    )
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <View behavior='position' style={styles.mainLCD}>
          <View style={styles.indicator}>
            <Text style={styles.indicatorText}>DEC</Text>
            <Text style={styles.indicatorTextDisabled}>HEX</Text>
          </View>
          <Text style={styles.lcd}>f(x)=⨋</Text>
        </View>
        <View style={styles.keyboard}>
        {Keyboard.map(row => this.renderRowKeys(row))}
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

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
