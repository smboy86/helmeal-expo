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

function LoginHomeScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <ContainerWithScroll safe>
        <Box>
          <Text>aaa</Text>
        </Box>
      </ContainerWithScroll>
    </Container>
  );
}

export default LoginHomeScreen;
