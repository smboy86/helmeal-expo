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
import TextNanum from '../basicComponents/TextNanum';
import Container from '../basicComponents/Container';

function LoginHomeScreen({ navigation, route }) {
  const refVideo = React.useRef(null);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <ContainerWithScroll safe>
        <Box full>
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
        </Box>
      </ContainerWithScroll>
    </Container>
  );
}

export default LoginHomeScreen;
