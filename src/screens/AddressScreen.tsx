import * as React from 'react';
import { useDispatch } from 'react-redux';

import Box from '../basicComponents/Box';
import ContainerWithScroll from '../basicComponents/ContainerWithScroll';
import Text from '../basicComponents/Text';
import Container from '../basicComponents/Container';
import { login } from '../store/slices/TempSlice';
import Postcode from 'react-native-daum-postcode';
import Layout from '../constants/Layout';

function AddressScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  const onMoveHome = () => {
    dispatch(login({ isLogin: true }));
    // navigation.navigate('')
  };

  const onSelctedAddress = (data: any) => {
    console.log('aaaa  :: ', data);
    navigation.navigate('Details', {
      screen: 'Subscribe',
      params: {
        address: `${data.address} ${
          data.buildingName !== '' ? '(' + data.buildingName + ')' : ''
        }`,
      },
    });
  };

  return (
    <Container>
      <ContainerWithScroll>
        <Postcode
          style={{
            width: Layout.window.width,
            height: Layout.window.height,
          }}
          jsOptions={{ animated: true }}
          onSelected={(data) => onSelctedAddress(data)}
        />
      </ContainerWithScroll>
    </Container>
  );
}

export default AddressScreen;
