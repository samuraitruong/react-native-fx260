import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, TouchableOpacity  } from 'react-native'
import { connect } from 'react-redux'
import Keyboard from '../Keyboard'

// Add Actions - replace 'Your' with whatever your reducer is called :)
import MathActions from '../Redux/MathRedux'

// Styles
import styles from './Styles/MainScreenStyle'

class MainScreen extends Component {
  renderRowKeys(keys) {
    const{ shiftOn, current} = this.props.math;
    const buttons =  keys.map(key => {
      let {display, expr} = key.normal;
      display = display || key.normal;

      return (
        <View key={key.shift + display} style={styles.keyboardKeyWrap}>
          <Text style={styles.shiftText}>{key.shift}</Text>
          <TouchableOpacity  title={display} style={styles.keyboardButton} onPress={()=> this.props.keyPress(current,shiftOn, key)}><Text style={styles.keyboardButtonText}>{display}</Text></TouchableOpacity>
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
    const {display} = this.props.math.current;

    return (
      <View style={styles.mainContainer}>
        <View behavior='position' style={styles.mainLCD}>
          <View style={styles.indicator}>
            <Text style={styles.indicatorText}>DEC</Text>
            <Text style={styles.indicatorTextDisabled}>HEX</Text>
          </View>
          <Text style={styles.lcd}>{display?display:'Welcome to FX260 '}</Text>
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
    math: state.math
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyPress: (current,shiftOn,key) => dispatch(MathActions.keyPress(current,shiftOn,key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
