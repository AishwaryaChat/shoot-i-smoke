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
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  View,
  ViewStyle
} from 'react-native';

import * as theme from '../../util/theme';

interface BannerProps {
  asTouchable?: boolean;
  children?: React.ReactNode;
  elevated?: boolean | 'very';
  onClick?: (event: GestureResponderEvent) => void;
  shadowPosition?: theme.ShadowPosition;
  style?: StyleProp<ViewStyle>;
}

export function Banner ({
  asTouchable,
  children,
  elevated,
  onClick,
  shadowPosition = 'bottom',
  style
}: BannerProps) {
  // FIXME any
  const Wrapper: any = asTouchable ? TouchableHighlight : View;

  return (
    <Wrapper
      onPress={asTouchable ? onClick : undefined}
      style={[
        styles.container,
        elevated === true
          ? theme.elevationShadowStyle(2, shadowPosition)
          : null,
        elevated === 'very'
          ? theme.elevationShadowStyle(10, shadowPosition)
          : null
      ]}
      underlayColor={asTouchable ? theme.primaryColor : undefined} // https://github.com/facebook/react-native/issues/11834
    >
      <View
        pointerEvents={asTouchable ? 'none' : 'auto'}
        style={[styles.content, style]}
      >
        {children}
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColor,
    zIndex: 1
  },
  content: {
    ...theme.withPadding,
    alignItems: 'center',
    flexDirection: 'row',
    height: 48
  }
});
