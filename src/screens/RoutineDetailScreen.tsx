import * as React from 'react';
import { useDispatch } from 'react-redux';

import Box from '../basicComponents/Box';
import Colors from '../constants/Colors';
import ContainerWithScroll from '../basicComponents/ContainerWithScroll';
import Text from '../basicComponents/Text';
import Container from '../basicComponents/Container';
import { login } from '../store/slices/TempSlice';
import Button from '../basicComponents/Button';

function RoutineDetailScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  const onMoveHome = () => {
    dispatch(login({ isLogin: true }));
    // navigation.navigate('')
  };

  const onMoveSubscribe = () => {
    navigation.navigate('Details', { screen: 'SubOption' });
  };

  return (
    <Container>
      <ContainerWithScroll>
        <Box full>
          <Text>제목상세페이지</Text>
        </Box>
        <Box aCenter>
          <Button
            onPress={onMoveSubscribe}
            fill
            label={'루틴 시작하기'}
            style={{
              backgroundColor: '#FC5C42',
            }}></Button>
        </Box>
      </ContainerWithScroll>
    </Container>
  );
}

export default RoutineDetailScreen;
