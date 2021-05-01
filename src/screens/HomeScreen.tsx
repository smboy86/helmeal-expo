import * as React from 'react';
import { Alert, Image, Platform, Pressable, View } from 'react-native';
import { Audio, Video } from 'expo-av';

import Box from '../basicComponents/Box';
import Colors from '../constants/Colors';
import ContainerWithScroll from '../basicComponents/ContainerWithScroll';
import LoadingBlur from '../basicComponents/LoadingBlur';
import Text from '../basicComponents/Text';
import Button from '../basicComponents/Button';
import Layout from '../constants/Layout';
import Container from '../basicComponents/Container';
import BoxPressable from '../basicComponents/BoxPressable';

function LoginHomeScreen({ navigation, route }) {
  const refVideo = React.useRef(null);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  const onMoveRoutineDetail = () => {
    navigation.navigate('Details', {
      screen: 'RoutineDetail',
      params: {
        title: '헬밀 프로틴',
      },
    });
  };

  return (
    <Container>
      <ContainerWithScroll safe>
        {/* <Box full>
          <Video
            ref={refVideo}
            source={require('../assets/video/sample.mp4')}
            rate={1.0}
            volume={1.0}
            isMuted={true}
            resizeMode='cover'
            shouldPlay
            useNativeControls
            isLooping
            style={{
              width: Layout.window.width - 10,
              height: 500,
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              elevation: 0,
            }}
          />
          <Text color={'#fff'}>홈 입니다..?</Text>
          <Box style={{ position: 'absolute', top: 60, left: 32 }}>
            <Text size={16} color={'#fff'}>
              Kakao makes
            </Text>
            <Text size={16} color={'#fff'}>
              a better world with
            </Text>
            <Text size={16} color={'#fff'}>
              people and technology.
            </Text>
          </Box>
        </Box> */}
        {/* ######################################################################## */}
        {/* 퍼블리싱용 페이지 이동 */}
        {/* <BoxPressable
          onPress={() =>
            navigation.navigate('Details', { screen: 'Subscribe' })
          }
          style={{ padding: 20 }}>
          <Text>(완료) 구독하기</Text>
        </BoxPressable>
        <BoxPressable
          style={{ padding: 20 }}
          onPress={() =>
            navigation.navigate('Details', { screen: 'SubOption' })
          }>
          <Text>(완료) 구독옵션선택</Text>
        </BoxPressable>
        <BoxPressable
          style={{ padding: 20 }}
          onPress={() =>
            navigation.navigate('Details', { screen: 'SubOptionComplete' })
          }>
          <Text>(완료) 구독옵션선택 완료</Text>
        </BoxPressable>
        <BoxPressable
          style={{ padding: 20 }}
          onPress={() => navigation.navigate('Details', { screen: 'Address' })}>
          <Text>(개발중) 배송지입력</Text>
        </BoxPressable>
        <BoxPressable
          style={{ padding: 20 }}
          onPress={() =>
            navigation.navigate('Details', { screen: 'SubComplete' })
          }>
          <Text>(x) 구독완료</Text>
        </BoxPressable> */}
        {/* ######################################################################## */}
        <Box full>
          <Text>건강을 위해</Text>
          <Text>시작한 운동,</Text>
          <Text>합성첨가물에</Text>
          <Text>빠져있진 않으신가요?</Text>
        </Box>
        <Box aCenter>
          <Button
            onPress={onMoveRoutineDetail}
            fill
            label={'메뉴보기'}
            style={{
              backgroundColor: '#FC5C42',
            }}></Button>
        </Box>
      </ContainerWithScroll>
    </Container>
  );
}

export default LoginHomeScreen;
