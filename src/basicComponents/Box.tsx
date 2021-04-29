// have to refactoring
import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  /* width: 100%; 넣은 이유가 뭐였을까?? */
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
    props.jBetween && {
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
    }} /*
    props.shadow &&
    Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    })
  */
`;

interface IProps extends ViewProps {
  children: ReactNode;
  full?: boolean;
  wFull?: boolean;
  row?: boolean;
  center?: boolean;
  jCenter?: boolean;
  jBetween?: boolean;
  jEnd?: boolean;
  aCenter?: boolean;
  right?: boolean;
  aEnd?: boolean;
  border?: boolean;
  shadow?: boolean;
  test?: boolean;
}

const Box: React.FunctionComponent<IProps> = (props: IProps) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Box;
