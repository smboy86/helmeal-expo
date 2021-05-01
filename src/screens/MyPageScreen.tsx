import * as React from 'react';
import { useDispatch } from 'react-redux';

import Box from '../basicComponents/Box';
import Colors from '../constants/Colors';
import ContainerWithScroll from '../basicComponents/ContainerWithScroll';
import Text from '../basicComponents/Text';
import Container from '../basicComponents/Container';
import { login } from '../store/slices/TempSlice';

function MyPageScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  const onMoveHome = () => {
    dispatch(login({ isLogin: true }));
    // navigation.navigate('')
  };

  return (
    <Container>
      <ContainerWithScroll safe>
        <Box full>
          <Text>제품상세 페이지</Text>
        </Box>
      </ContainerWithScroll>
    </Container>
  );
}

export default MyPageScreen;
