import * as React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import Colors from '../constants/Colors';

interface IProps extends TextInputProps {
  // onPress(): void; // ? or 조건을 같이 쓸 수가 없네??
  value: string | undefined;
  setValue: Function;
  placeholder: string;
  center?: boolean;
  style?: TextInputProps;
}

export default function (props: IProps) {
  const { value, setValue, placeholder, center, style } = props;

  return (
    <TextInput
      {...props}
      value={value}
      onChangeText={text => setValue(text)}
      placeholder={placeholder}
      textAlignVertical={center ? 'center' : undefined}
      style={[{ ...style }, { textAlign: center ? 'center' : 'auto' }]}
    />
  );
}
