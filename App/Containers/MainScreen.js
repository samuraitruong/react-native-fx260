import React, {Component} from 'react'
import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import Keyboard from '../Keyboard'

// Add Actions - replace 'Your' with whatever your reducer is called :)
import MathActions from '../Redux/MathRedux'

// Styles
import styles from './Styles/MainScreenStyle'

class MainScreen extends Component {
  renderRowKeys(keys, index) {
    const {shiftOn, current, hyp, memories}  = this.props.math;

    const buttons = keys.filter(key=> (key.hyp != true && !hyp) || (key.hyp == null || (hyp && key.hyp))).map(key => {

      let {display, expr} = key.normal;
      display = display || key.normal;

      const shiftText = (key.shift && key.shift.display)?key.shift.display :key.shift;

      return (
        <View key={shiftText + display} style={styles.keyboardKeyWrap}>
          <Text style={styles.shiftText}>{shiftOn? display: shiftText}</Text>
          <TouchableOpacity
            title={display}
            style={styles.keyboardButton}
            onPress={() => this.props.keyPress(current, shiftOn, key, hyp, memories)}
            onLongPress={() => this.props.keyPress(current, true, key, hyp, memories)}>
            <Text style={styles.keyboardButtonText}>{shiftOn? shiftText: display}</Text>
          </TouchableOpacity>
        </View>
      )
    });
    return (
      <View style={styles.keyboardRow} key={"key" + index}>
        {buttons}
      </View>
    )
  }
  render() {
    const {display } = this.props.math.current;
    const {shiftOn ,error, memories, hyp} = this.props.math;

    return (
      <View style={styles.mainContainer}>
        <View behavior='position' style={styles.mainLCD}>
          <View style={styles.indicator}>
            <Text style={shiftOn?styles.indicatorText : styles.indicatorTextDisabled}>SHIFT</Text>
            <Text style={styles.indicatorText}>DEC</Text>
            <Text style={styles.indicatorTextDisabled}>HEX</Text>
            {error!= null? <Text style={styles.indicatorError}>ERROR</Text>: null}
             {memories.length > 0? <Text style={styles.indicatorText}>M+</Text> : null}
             {hyp ? <Text style={styles.indicatorText}>HYP</Text> : null}

          </View>
          <Text style={styles.lcd}>{display
              ? display
              : 'Welcome to FX260 '}</Text>
        </View>
        <View style={styles.keyboard}>
          {Keyboard.map((row, index) => this.renderRowKeys(row, index))}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {math: state.math}
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyPress: (current, shiftOn, key, hyp, memories) => dispatch(MathActions.keyPress(current, shiftOn, key,hyp, memories))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
