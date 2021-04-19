import React, { ReactNode } from 'react';
import { Text, TextStyle, TextProps } from 'react-native';
interface IProps extends TextProps {
  size?: number;
  color?: string;
  bold?: boolean;
  light?: boolean;
  lineHeight?: number;
  style?: TextStyle;
  children: ReactNode;
}

export default function (props: IProps) {
  const {
    size,
    color,
    bold = false,
    light = false,
    lineHeight,
    style,
    children,
    ...newProps
  } = props;

  // 1) font 전역 설정 Type A : fontWeight 동일해야하는 글씨체일때
  // let font = { fontFamily: 'NotoSansKR-Regular', fontWeight: 'normal' };

  // 1) font 전역 설정 Type B : 위와 같은 폰트가 아닐때
  const fontStyle = {
    // fontFamily: 'NotoSansKR',
    // fontWeight: light ? '300' : bold ? '700' : '400',
    fontFamily: light
      ? 'NotoSansKRLight'
      : bold
      ? 'NotoSansKRBold'
      : 'NotoSansKRMedium',
  };

  // if (lineHeight !== undefined) {
  //   fontStyle = {
  //     ...fontStyle,
  //     liheHeight: lineHeight,
  //   };
  // }

  return (
    <Text {...newProps} style={[style, fontStyle, { fontSize: size, color }]}>
      {children}
    </Text>
  );
}
