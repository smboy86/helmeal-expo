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
import Collapsible from 'react-native-collapsible';
import BoxPressable from '../basicComponents/BoxPressable';
import Button from '../basicComponents/Button';

function SubOptionScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  const [selDayInfo] = React.useState(route.params.day);
  const [selSubInfo] = React.useState(route.params.subDate);

  React.useEffect(() => {
    console.log('day  :::   ', route.params.day);
    console.log('subDate :::   ', route.params.subDate);
  }, []);

  const onMoveSubscribe = () => {
    navigation.navigate('Details', {
      screen: 'Subscribe',
      params: {
        address: '',
      },
    });
  };

  return (
    <ContainerWithScroll>
      <Box full jBetween style={{ padding: 24, paddingBottom: 0 }}>
        <Box>
          <Box
            style={{
              paddingVertical: 8,
              paddingHorizontal: 24,
              backgroundColor: '#F5F6F7',
            }}>
            <Box
              style={{
                paddingVertical: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#EAEAEA',
              }}>
              <Text bold size={24} color={'#020202'}>
                헬밀 프로틴
              </Text>
            </Box>
            <Box
              style={{
                paddingVertical: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#EAEAEA',
              }}>
              <Text size={16} color={'#020202'}>
                {selDayInfo}
              </Text>
            </Box>
            <Box
              style={{
                paddingVertical: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#EAEAEA',
              }}>
              <Text size={16} color={'#020202'}>
                {selSubInfo}
              </Text>
            </Box>
            <Box
              style={{
                paddingVertical: 16,
              }}>
              <Text
                bold
                size={16}
                color={'#020202'}
                style={{ marginBottom: 8 }}>
                배송시작일
              </Text>
              <Text size={16} color={'#020202'}>
                2021년 4월 26일~2021년 5월 1일
              </Text>
            </Box>
          </Box>
          <Box
            style={{
              marginTop: 24,
              paddingVertical: 16,
              paddingHorizontal: 24,
              backgroundColor: '#F5F6F7',
            }}>
            <Box row jBetween style={{ marginBottom: 4 }}>
              <Text bold size={16} color={'#020202'}>
                총 결제금액
              </Text>
              <Text bold size={16} color={'#020202'}>
                42,000원
              </Text>
            </Box>
            <Box row jBetween>
              <Text size={12} color={'#767676'}>
                배송비
              </Text>
              <Text size={12} color={'#767676'}>
                무료
              </Text>
            </Box>
          </Box>
        </Box>
        {/* bottom 버튼 */}
        <Box>
          <Button
            onPress={onMoveSubscribe}
            fill
            label={'바로구매'}
            style={{
              backgroundColor: '#FC5C42',
            }}></Button>
        </Box>
      </Box>
    </ContainerWithScroll>
  );
}

export default SubOptionScreen;
