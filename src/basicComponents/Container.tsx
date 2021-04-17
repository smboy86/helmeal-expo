// have to refactoring
import React, { ReactNode } from 'react';
import { ViewProps, ViewStyle } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const Wrap = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props: IProps) =>
    props.backWhite ? '#fff' : Colors.default.backgroundTintColor};
`;

const ContentsWrap = styled.View`
  flex: 1;
`;
interface IProps extends ViewProps {
  children: ReactNode;
  backWhite?: boolean;
  safe?: boolean;
  style?: ViewStyle;
}

const Container: React.FunctionComponent<IProps> = (props: IProps) => {
  const insect = useSafeAreaInsets();

  return (
    <Wrap backWhite={props.backWhite} style={{ ...props.style }}>
      {props.safe ? (
        <SafeAreaView style={{ flex: 1 }}>
          <ContentsWrap
            style={{
              height: Layout.window.height - insect.top - insect.bottom,
            }}>
            {props.children}
          </ContentsWrap>
        </SafeAreaView>
      ) : (
        <ContentsWrap>{props.children}</ContentsWrap>
      )}
    </Wrap>
  );
};
export default Container;
