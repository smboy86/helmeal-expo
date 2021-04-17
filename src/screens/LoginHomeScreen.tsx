import * as React from 'react';
import { Alert, Image, Platform, Pressable, View } from 'react-native';

import Box from '../basicComponents/Box';
import Colors from '../constants/Colors';
import ContainerWithScroll from '../basicComponents/ContainerWithScroll';
import LoadingBlur from '../basicComponents/LoadingBlur';
import Text from '../basicComponents/Text';
import Button from '../basicComponents/Button';
import Layout from '../constants/Layout';
import TextNanum from '../basicComponents/TextNanum';
import Container from '../basicComponents/Container';
import BoxPressable from '../basicComponents/BoxPressable';

function HomeScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <ContainerWithScroll safe>
        <Box center jEnd full>
          <Image
            source={require('../assets/images/ico-logo-m.png')}
            style={{
              width: 145,
              height: 57,
            }}
          />
          <Box
            style={{
              paddingTop: 94,
            }}>
            <Button
              onPress={null}
              fill
              label={'카카오톡 아이디 로그인'}
              style={{ marginBottom: 8 }}></Button>
            <Button
              onPress={null}
              fill
              label={'애플 아이디 로그인'}
              style={{ marginBottom: 8 }}></Button>
            <Button onPress={null} fill label={'구글 아이디 로그인'}></Button>
          </Box>
          <BoxPressable
            onPress={null}
            style={{
              marginTop: 32,
              marginBottom: 46,
            }}>
            <Text
              size={14}
              color={'#767676'}
              style={{ textDecorationLine: 'underline' }}>
              둘러보기
            </Text>
          </BoxPressable>
        </Box>
      </ContainerWithScroll>
    </Container>
  );
}

export default HomeScreen;