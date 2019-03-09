import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import AsyncStorageHelper from '../model/AsyncStorageHelper'
import FlashNotification from '../components/common/FlashNotification'
import LoggingService from '../services/LoggingService'
import {
  SetupWelcomeContainer,
  LargeText,
  UnderlineDivider
} from '../components/setup'
import { LargeButton, ParagraphText } from '../components/common'

class SetupWelcome extends Component {
  constructor (props) {
    super(props)

    this.state = {
      toggleCount: 1,
      maxToggle: 10
    }
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton () {
    return true
  }

  componentDidMount = async () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
    await AsyncStorageHelper.useMainNet()
  }

  showNextSetup = () => {
    this.props.navigation.navigate('SetupNewOrRecovery')
  }

  testNetToggler = async () => {
    if (this.state.maxToggle === this.state.toggleCount) {
      if (await AsyncStorageHelper.isMainNet()) {
        await AsyncStorageHelper.useTestNet()
        FlashNotification.showInformation(
          'You have successfully switched to TestNet!'
        )
      } else {
        await AsyncStorageHelper.useMainNet()
        FlashNotification.showInformation(
          'You have successfully switched to MainNet!'
        )
      }
      this.setState({ toggleCount: 1 })
    } else {
      this.setState({ toggleCount: this.state.toggleCount + 1 })
    }
    LoggingService.debug(`this.state.toggleCount is ${this.state.toggleCount}`)
  }

  render () {
    return (
      <SetupWelcomeContainer>
        <LargeText>Welcome to ndau</LargeText>
        <UnderlineDivider />
        <ParagraphText onPress={this.testNetToggler}>
          ndau is a cryptocurrency designed to be a buoyant long-term store of
          value.
        </ParagraphText>
        <ParagraphText>
          To get you started securely, you will create a new wallet, protect it
          with a password, and create a recovery phrase which you will need in
          order to restore your wallet if you lose access to it.
        </ParagraphText>
        <LargeButton onPress={this.showNextSetup}>Get started</LargeButton>
      </SetupWelcomeContainer>
    )
  }
}

export default SetupWelcome
