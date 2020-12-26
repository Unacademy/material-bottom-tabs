/* @flow */
import * as React from "react";
import BottomNavigation from "react-native-paper/src/components/BottomNavigation";
import { createTabNavigator } from "react-navigation-tabs";
class BottomNavigationView extends React.Component {
  _getColor = ({ route }) => {
    const { descriptors } = this.props;
    const descriptor = descriptors[route.key];
    const options = descriptor.options;
    return options.tabBarColor;
  };
  _isVisible() {
    const { navigation, descriptors } = this.props;
    const { state } = navigation;
    const route = state.routes[state.index];
    const options = descriptors[route.key].options;
    return options.tabBarVisible;
  }
  _renderIcon = ({ route, focused, color }) => {
    return this.props.renderIcon({ route, focused, tintColor: color });
  };
  render() {
    const {
      activeTintColor,
      inactiveTintColor,
      navigation,
      // eslint-disable-next-line no-unused-vars
      descriptors,
      barStyle,
      onTabChanged,
      ...rest
    } = this.props;
    const isVisible = this._isVisible();
    const extraStyle =
      typeof isVisible === "boolean"
        ? { display: isVisible ? null : "none" }
        : null;
    return (
      <BottomNavigation
        // Pass these for backward compaibility
        {...rest}
        renderIcon={this._renderIcon}
        barStyle={[barStyle, extraStyle]}
        navigationState={navigation.state}
        getColor={this._getColor}
        onIndexChange={index => {
          if (onTabChanged) {
            onTabChanged(navigation.state, index);
          }
        }}
      />
    );
  }
}
export default createTabNavigator(BottomNavigationView);
