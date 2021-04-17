// have to refactoring
import React, { ReactNode } from 'react';
import { Pressable, PressableProps } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(Pressable)`
  ${(props: IProps) =>
    props.wFull && {
      width: '100%',
    }}
  ${(props: IProps) =>
    props.full && {
      flex: 1,
    }}
  flex-direction: ${(props: IProps) => (props.row ? 'row' : 'column')};
  ${(props: IProps) =>
    props.center && {
      justifyContent: 'center',
      alignItems: 'center',
    }}
  ${(props: IProps) =>
    props.space && {
      justifyContent: 'space-between',
    }}
  ${(props: IProps) =>
    props.jCenter && {
      justifyContent: 'center',
    }}
  ${(props: IProps) =>
    props.aCenter && {
      alignItems: 'center',
    }}
  ${(props: IProps) =>
    props.jEnd && {
      justifyContent: 'flex-end',
    }}
  ${(props: IProps) =>
    props.aEnd && {
      alignItems: 'flex-end',
    }}
  ${(props: IProps) =>
    props.border && {
      border: '1px solid red',
    }}
`;

interface IProps extends PressableProps {
  children: ReactNode;
  full?: boolean;
  wFull?: boolean;
  row?: boolean;
  center?: boolean;
  jCenter?: boolean;
  aCenter?: boolean;
  right?: boolean;
  jEnd?: boolean;
  aEnd?: boolean;
  space?: boolean;
  border?: boolean;
  shadow?: boolean;
  test?: boolean;
  onPress: () => void;
}

const BoxPressable: React.FunctionComponent<IProps> = (props: IProps) => {
  return <Container {...props}>{props.children}</Container>;
};

export default BoxPressable;
