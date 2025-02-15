// Sh**t! I Smoke
// Copyright (C) 2018-2019  Marcelo S. Coelho, Amaury Martiny

// Sh**t! I Smoke is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Sh**t! I Smoke is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Sh**t! I Smoke.  If not, see <http://www.gnu.org/licenses/>.

import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import * as theme from '../../util/theme';

interface BackgroundProps {
  children?: JSX.Element;
  style?: StyleProp<ViewStyle>;
}

export function Background (props: BackgroundProps) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.iconBackgroundColor,
    flexGrow: 1,
    justifyContent: 'center'
  }
});
