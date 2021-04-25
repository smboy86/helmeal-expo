import * as React from 'react';
import { Alert, Image, Platform, Pressable, View } from 'react-native';
import * as Linking from 'expo-linking';
import { useDispatch } from 'react-redux';

import * as WebBrowser from 'expo-web-browser';
import {
  makeRedirectUri,
  ResponseType,
  useAuthRequest,
} from 'expo-auth-session';

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

// Endpoint
WebBrowser.maybeCompleteAuthSession();

const useProxy = true;
const redirectUri = makeRedirectUri({
  useProxy,
});

const discovery = {
  // authorizationEndpoint: '/oauth/authorize?client_id={REST_API_KEY}&redirect_uri={REDIRECT_URI}&response_type=code',
  authorizationEndpoint: 'https://kauth.kakao.com/oauth/authorize',
  tokenEndpoint: 'https://kauth.kakao.com/oauth/token',
};

function HomeScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '63803fa965cb7986298f76f973554e89',
      // There are no scopes so just pass an empty array
      scopes: ['profile', 'account_email'],
      usePKCE: false,
      // For usage in managed apps using the proxy
      redirectUri,
      // responseType: ResponseType.Code,
      responseType: ResponseType.Code,
    },
    discovery
  );

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    if (response?.type === 'success') {
      console.log('111  login response  ::: ', response);
      const { code } = response.params;
      fetch('https://kapi.kakao.com' + '/oauth/token', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          // Authorization: 'Bearer ' + code,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body: `grant_type=authorization_code&client_id=63803fa965cb7986298f76f973554e89&${'http://127.0.0.1:19000'}=&code=${code}`,
      }).then((res) => {
        console.log('로그인 사용자 정보...??? :: ', JSON.stringify(res));
        Alert.alert('', `로그인 성공 사용자 정보 :: ${JSON.stringify(res)}`);
      });
    } else {
      console.log('222   login response  ::: ', response);
      Alert.alert('', JSON.stringify(response));
    }
  }, [response]);

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
              onPress={() =>
                promptAsync({
                  useProxy: true,
                })
              }
              // onPress={null}
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
            // onPress={onMoveHome}
            style={{
              marginTop: 32,
              marginBottom: 46,
              paddingHorizontal: 60,
            }}>
            <Text size={12} color={'#767676'}>
              로그인하시면 헬밀의{' '}
              <Text
                size={12}
                color={'#767676'}
                style={{ textDecorationLine: 'underline' }}
                onPress={() => {
                  Linking.openURL('https://naver.com');
                }}>
                개인정보처리방침
              </Text>{' '}
              및{' '}
              <Text
                size={12}
                color={'#767676'}
                style={{ textDecorationLine: 'underline' }}
                onPress={() => {
                  Linking.openURL('https://daum.net');
                }}>
                이용약관
              </Text>{' '}
              에 동의하는 것으로 간주합니다.
            </Text>
          </BoxPressable>
        </Box>
      </ContainerWithScroll>
    </Container>
  );
}

export default HomeScreen;
