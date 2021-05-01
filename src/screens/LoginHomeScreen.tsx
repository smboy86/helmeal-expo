import * as React from 'react';
import {
  Alert,
  Image,
  Platform,
  Pressable,
  View,
  Button as Btn,
} from 'react-native';
import * as Linking from 'expo-linking';
import { useDispatch } from 'react-redux';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import firebase from 'firebase';
import axios from 'axios';

import Box from '../basicComponents/Box';
import Colors from '../constants/Colors';
import ContainerWithScroll from '../basicComponents/ContainerWithScroll';
import LoadingBlur from '../basicComponents/LoadingBlur';
import Text from '../basicComponents/Text';
import Button from '../basicComponents/Button';
import Layout from '../constants/Layout';
import Container from '../basicComponents/Container';
import BoxPressable from '../basicComponents/BoxPressable';
import { login } from '../store/slices/TempSlice';

WebBrowser.maybeCompleteAuthSession();

function HomeScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '812549016667-etebbl16to70n1gsfoagumittsduottt.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;

      axios
        .get('https://www.googleapis.com/userinfo/v2/me', {
          headers: {
            Authorization: `Bearer ${authentication?.accessToken}`,
          },
        })
        .then((res) => {
          console.log('##### succes ', res.data);
          /*
            {
              "email": "smboy86@gmail.com",
              "family_name": "박",
              "given_name": "성민",
              "id": "106842724698032136484",
              "locale": "ko",
              "name": "박성민",
              "picture": "https://lh6.googleusercontent.com/-LXWeT9t0lpg/AAAAAAAAAAI/AAAAAAAAAME/AMZuucljUSjtWaLeez5tuTcZGLiZp6tg_Q/s96-c/photo.jpg",
              "verified_email": true,
            }
          */
          Alert.alert(
            '',
            `안녕하세요! ${res.data.name}님 가입을 환영합니다.`,
            [
              {
                text: '확인',
                onPress: () => {
                  dispatch(login({ isLogin: true }));
                  navigation.goBack();
                },
              },
            ],
            { cancelable: false }
          );
        })
        .catch((error) => {
          console.error('##### errr ', error);
        });
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
              disabled={!request}
              onPress={() => Alert.alert('', '[개발중] 카카오 로그인')}
              fill
              label={'카카오톡 아이디 로그인'}
              style={{ marginBottom: 8 }}></Button>
            <Button
              disabled={!request}
              onPress={() => Alert.alert('', '[개발중] 애플 로그인')}
              fill
              label={'애플 아이디 로그인'}
              style={{ marginBottom: 8 }}></Button>
            <Button
              disabled={!request}
              onPress={() => {
                promptAsync();
              }}
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
                  Linking.openURL(
                    'https://www.notion.so/0d1cde2a6a434fc985cb9a1a7e192d2f'
                  );
                }}>
                개인정보처리방침
              </Text>{' '}
              및{' '}
              <Text
                size={12}
                color={'#767676'}
                style={{ textDecorationLine: 'underline' }}
                onPress={() => {
                  Linking.openURL(
                    'https://www.notion.so/0c65aea4959e43f9a9712dd7ad37f6e9'
                  );
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
