import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator,Text
} from 'react-native';

//import Init from './app/util/Setup'
//import ThemeService from './app/util/ThemeService'

export default class SMK extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('SMK', () => SMK);
