import React, {Component} from 'react';
import {
  TabBarIOS,Text
} from 'react-native';

//import Init from '../util/Setup';
import ThemeService from '../util/ThemeService';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Main extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected: 'Listmain'
    };
    this._screens = {
      Listmain: ThemeService.getListmain(),

    }
  }
  render() {
    let Wrapper = ThemeService.getBackground();
    return (

<Wrapper>
        {this.renderTabBar(Wrapper.tabProps)}
      </Wrapper>
    )
  }

  renderTabBar(tabBarProps) {
    return (
      <TabBarIOS {...tabBarProps}>
        <Icon.TabBarItemIOS
          title="Profile"
          iconName="ios-person"
          selected={this.state.selected === 'Listmain'}
          onPress={() => {
            this.setState({
              selected: 'Listmain',
            });
          }}>
          {<this._screens.profile navigator={this.props.navigator}/>}
        </Icon.TabBarItemIOS>
        </TabBarIOS>
    );
  }

}
