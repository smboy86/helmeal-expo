/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Pressable, PressableProps } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import BoxPressable from './BoxPressable';
import Text from './Text';

const BtnBox = styled(Pressable)`
  width: ${Layout.window.width - 48}px;
  align-items: center;
  padding: 14px 0;
  background: ${(props: PropsType) => (props.fill ? '#111111' : '#FFF')};
  border: ${(props: PropsType) => (props.fill ? '0px' : '2px solid #ffffff')};
  border-radius: 8px;
`;

type PropsType = PressableProps & {
  label?: string;
  fill?: boolean;
  disabled?: boolean;
  onPress: Function | null;
};

function Button(props: PropsType) {
  const { label, fill, disabled, onPress } = props;
  return (
    <>
      {disabled ? (
        <BoxPressable
          onPress={() => null}
          style={{
            alignItems: 'center',
            paddingVertical: 14,
            backgroundColor: '#cccccc',
            borderRadius: 8,
          }}>
          <Text bold size={17} color={fill ? '#FFF' : Colors.default.text}>
            {label}
          </Text>
        </BoxPressable>
      ) : (
        <BtnBox {...props} onPress={onPress}>
          <Text bold size={17} color={fill ? '#FFF' : Colors.default.text}>
            {label}
          </Text>
        </BtnBox>
      )}
    </>
  );
}

export default Button;
