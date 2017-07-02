import React from 'react';
import {RkConfig} from 'react-native-ui-kitten';

import Main from '../components/Main';
import Background from '../components/Background';
import Listmain from '../components/Listmain';

let Theme = {
  Main: Main,
  Background: Background,
  Listmain: Listmain
  };

export default ThemeService = {
  getMainScreen: () => Theme.Main,
  getBackground: () => Theme.Background,
  getListmain: () => Theme.Listmain
}