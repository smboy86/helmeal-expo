import * as React from 'react';
import {
  Alert,
  Image,
  Platform,
  Pressable,
  View,
  Button as Btn,
} from 'react-native';
import { useDispatch } from 'react-redux';

import Box from '../basicComponents/Box';
import Colors from '../constants/Colors';
import ContainerWithScroll from '../basicComponents/ContainerWithScroll';
import Text from '../basicComponents/Text';
import Container from '../basicComponents/Container';
import { login } from '../store/slices/TempSlice';

function SubOptionScreen({ navigation, route }) {
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
          <Text>asdfasdffsd</Text>
        </Box>
      </ContainerWithScroll>
    </Container>
  );
}

export default SubOptionScreen;
