/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar, Text, View, TouchableOpacity} from 'react-native';

import Theme, {
  createTheme,
  createStyle,
  createThemedComponent,
} from 'react-native-theming';

const themes = [
  createTheme(require('./theme/Light.js'), 'TestLight'),
  createTheme(require('./theme/Dark.js'), 'TestDark'),
];

const styles = createStyle(require('./styles/default.js'));

const Button = createThemedComponent(TouchableOpacity);
const Bar = createThemedComponent(StatusBar, ['barStyle', 'backgroundColor']);

const App: () => Node = () => {
  return (
    <Theme.View style={styles.container}>
      <Bar barStyle="@statusBar" backgroundColor="@backgroundColor" />
      <Theme.ImageBackground source="@icon" style={styles.icon} />
      <Theme.Text style={styles.welcome}>React Native Theming Demo!</Theme.Text>
      <Theme.Text style={styles.instructions}>
        To experiment check app.js file
      </Theme.Text>
      <Theme.Text style={styles.instructions}>
        You can now create your themes using JSON. The styles declaration is
        directly compatible with StyleSheet.create. You just need to replace
        `StyleSheet.create` with `createStyle` and add your theme variables in
        the styles.
      </Theme.Text>
      <Theme.View style={{flexDirection: 'row'}}>
        {themes.map(theme => (
          <Button
            key={theme.name}
            style={[styles.button, styles.genericButton]}
            onPress={() => theme.apply()}>
            <Theme.Text style={[styles.buttonText, {color: '@buttonText'}]}>
              {theme.name}
            </Theme.Text>
          </Button>
        ))}
      </Theme.View>
    </Theme.View>
  );
};

export default App;
