import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import Init from './app/util/Setup'
import ThemeService from './app/util/ThemeService'

import Main from "./app/components/Main"

export default class SMK extends Component {
  render() {
    return (
      <Main />
    );
  }
}
AppRegistry.registerComponent('SMK', () => SMK);

