// have to refactoring
import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import Box from './Box';
import Text from './Text';

const Container = styled.View`
  /* width: 100%; 넣은 이유가 뭐였을까?? */
  /* ${(props: IProps) =>
    props.wFull && {
      width: '100%',
    }}
   */
`;

interface IProps extends ViewProps {
  label: string;
  children: ReactNode;
}

const BoxWithLabel: React.FunctionComponent<IProps> = (props: IProps) => {
  const { label, children, style } = props;
  return (
    <Box {...props}>
      <Text bold size={15} color={'#020202'}>
        {label}
      </Text>
      <Box
        style={{
          marginTop: 8,
          padding: 24,
          // paddingVertical: 16,
          // paddingHorizontal: 24,
          backgroundColor: '#F5F6F7',
          borderRadius: 8,
        }}>
        {children}
      </Box>
    </Box>
  );
};

export default BoxWithLabel;
