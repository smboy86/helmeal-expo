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

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      '812549016667-etebbl16to70n1gsfoagumittsduottt.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    console.log('000000000');
    if (response?.type === 'success') {
      console.log('1111  response :::: ', response);
      const { id_token } = response.params;

      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      console.log('2 - 11111  credential :::: ', credential);
      console.log('2 - 22222  credential :::: ', credential.accessToken);
      console.log('2 - 33333  credential :::: ', credential.idToken);

      // 사용자 정보 조회
      console.log('2 - 444444  credential :::: ', credential.idToken);
      // fetch('https://www.googleapis.com/userinfo/v2/me', {
      // fetch(
      //   'https://oauth2.googleapis.com/tokeninfo?id_token=' +
      //     credential.idToken,
      //   {
      //     // headers: { Authorization: `Bearer ${credential.idToken}` },
      //   }
      // )
      //   .then((response) => {
      //     console.log('33333 유저 정보 조회 성공 :: ', response);
      //   })
      //   .catch((err) => {
      //     console.log('eeerrrr  ', err);
      //   });

      // fetch('https://www.googleapis.com/userinfo/v2/me', {
      //   headers: { Authorization: `Bearer ${credential.idToken}` },
      // })
      fetch(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${credential.idToken}`,
        {
          headers: { Authorization: `Bearer ${credential.idToken}` },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log('####  333333    :: ', data));

      // 회원가입 처리
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(() => {
          console.log('44444  회원가입 완료 ');
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
            <Btn
              disabled={!request}
              title='Login'
              onPress={() => {
                promptAsync();
              }}
            />
            <Button
              disabled={true}
              onPress={() => {
                promptAsync();
              }}
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
