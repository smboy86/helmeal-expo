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
import { login } from '../store/slices/TempSlice';
import { useDispatch } from 'react-redux';

function HomeScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  const onMoveHome = () => {
    dispatch(login({ isLogin: true }));
    // navigation.navigate('')
  };

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
              onPress={() => Alert.alert('', '[dev] 카카오톡 로그인')}
              fill
              label={'카카오톡 아이디 로그인'}
              style={{ marginBottom: 8 }}></Button>
            <Button
              onPress={() => Alert.alert('', '[dev] 애플 로그인')}
              fill
              label={'애플 아이디 로그인'}
              style={{ marginBottom: 8 }}></Button>
            <Button
              onPress={() => Alert.alert('', '[dev] 구글 로그인')}
              fill
              label={'구글 아이디 로그인'}></Button>
          </Box>
          <BoxPressable
            onPress={onMoveHome}
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
