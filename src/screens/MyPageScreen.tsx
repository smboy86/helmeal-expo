import * as React from 'react';
import { useDispatch } from 'react-redux';

import Box from '../basicComponents/Box';
import ContainerWithScroll from '../basicComponents/ContainerWithScroll';
import Text from '../basicComponents/Text';
import Container from '../basicComponents/Container';
import { login } from '../store/slices/TempSlice';
import Button from '../basicComponents/Button';

function MyPageScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  const onMoveHome = () => {
    dispatch(login({ isLogin: true }));
    // navigation.navigate('')
  };

  const onMoveLogin = () => {
    navigation.navigate('Details', {
      screen: 'Login',
      params: {
        // address: '',
      },
    });
  };

  return (
    <Container>
      <ContainerWithScroll safe>
        <Box full>
          <Text>가입하고 건강한 식단을 준비하세요!</Text>
          <Box aCenter>
            <Button
              onPress={onMoveLogin}
              fill
              label={'로그인 / 회원가입'}
              style={{
                backgroundColor: '#1d1d1d',
              }}></Button>
          </Box>
          <Box style={{ marginTop: 40 }}>
            <Text>문의하기</Text>
            <Text>약관 및 정책</Text>
          </Box>
        </Box>
      </ContainerWithScroll>
    </Container>
  );
}

export default MyPageScreen;
