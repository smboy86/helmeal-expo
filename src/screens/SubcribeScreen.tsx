import * as React from 'react';
import { useDispatch } from 'react-redux';

import Box from '../basicComponents/Box';
import ContainerWithScroll from '../basicComponents/ContainerWithScroll';
import Text from '../basicComponents/Text';
import Container from '../basicComponents/Container';
import BoxWithLabel from '../basicComponents/BoxWithLabel';
import BoxPressable from '../basicComponents/BoxPressable';
import { IcoCheckOn, IcoCheckOff } from '../constants/Svgs';
import Button from '../basicComponents/Button';
import { Alert } from 'react-native';

function SubCompleteScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);
  const [checkPayment, setCheckPayment] = React.useState({
    naver: true,
    kakao: false,
    card: false,
    hp: false,
  });
  const [isSubComplete, setIsSubCompelte] = React.useState(false);

  const onMoveInputAdress = () => {
    navigation.navigate('Details', {
      screen: 'Address',
    });
  };

  const onCheckPayment = (type: string) => {
    setCheckPayment({
      naver: type === 'naver',
      kakao: type === 'kakao',
      card: type === 'card',
      hp: type === 'hp',
    });

    // 추후 백엔드 호출시 사용
    // if (type === 'naver') {
    //   setCheckPayment({
    //     naver: true,
    //     kakao: false,
    //     card: false,
    //     hp: false,
    //   });
    // } else if (type === 'kakao') {
    //   setCheckPayment({
    //     naver: false,
    //     kakao: true,
    //     card: false,
    //     hp: false,
    //   });
    // } else if (type === 'card') {
    //   setCheckPayment({
    //     naver: false,
    //     kakao: true,
    //     card: false,
    //     hp: false,
    //   });
    // } else if (type === 'hp') {
    // }
  };

  return (
    <Container>
      <ContainerWithScroll style={{ padding: 24 }}>
        <BoxWithLabel label='배송지 정보'>
          <Box center style={{ paddingVertical: 24 }}>
            <Text size={14} color={'#767676'}>
              {route.params.address === ''
                ? '배송지 정보가 없습니다.'
                : route.params.address}
            </Text>
            <BoxPressable
              onPress={onMoveInputAdress}
              style={{
                marginTop: 10,
                backgroundColor: '#FC5C42',
                borderRadius: 8,
                padding: 14,
                paddingVertical: 10,
              }}>
              <Text size={13} color={'#fff'}>
                배송지 입력하기
              </Text>
            </BoxPressable>
          </Box>
        </BoxWithLabel>
        <BoxWithLabel label='주문내역' style={{ marginTop: 20 }}>
          <Box
            style={{
              paddingBottom: 16,
              borderBottomWidth: 1,
              borderColor: '#EAEAEA',
            }}>
            <Text bold size={16} color={'#020202'}>
              헬밀 프로틴
            </Text>
          </Box>
          <Box
            style={{
              marginTop: 16,
              paddingBottom: 16,
              borderBottomWidth: 1,
              borderColor: '#EAEAEA',
            }}>
            <Text size={16} color={'#020202'}>
              5일 - 월 / 화 / 수 / 목 / 금
            </Text>
          </Box>
          <Box
            style={{
              marginTop: 16,
            }}>
            <Text bold size={16} color={'#020202'} style={{ paddingBottom: 6 }}>
              배송시작일
            </Text>
            <Text size={16} color={'#020202'}>
              2021년 4월 26일~2021년 5월 1일
            </Text>
          </Box>
        </BoxWithLabel>
        <BoxWithLabel label='결제 수단' style={{ marginTop: 20 }}>
          <BoxPressable
            row
            onPress={() => onCheckPayment('naver')}
            style={{ marginBottom: 16 }}>
            {checkPayment.naver ? <IcoCheckOn /> : <IcoCheckOff />}
            <Text size={16} color={'#09101D'} style={{ marginLeft: 12 }}>
              네이버 페이
            </Text>
          </BoxPressable>
          <BoxPressable
            row
            onPress={() => onCheckPayment('kakao')}
            style={{ marginBottom: 16 }}>
            {checkPayment.kakao ? <IcoCheckOn /> : <IcoCheckOff />}
            <Text size={16} color={'#09101D'} style={{ marginLeft: 12 }}>
              카카오페이
            </Text>
          </BoxPressable>
          <BoxPressable
            row
            onPress={() => onCheckPayment('card')}
            style={{ marginBottom: 16 }}>
            {checkPayment.card ? <IcoCheckOn /> : <IcoCheckOff />}
            <Text size={16} color={'#09101D'} style={{ marginLeft: 12 }}>
              신용/체크카드
            </Text>
          </BoxPressable>
          <BoxPressable
            row
            onPress={() => onCheckPayment('hp')}
            style={{ marginBottom: 16 }}>
            {checkPayment.hp ? <IcoCheckOn /> : <IcoCheckOff />}
            <Text size={16} color={'#09101D'} style={{ marginLeft: 12 }}>
              휴대폰결제
            </Text>
          </BoxPressable>
        </BoxWithLabel>
        <BoxWithLabel label='' style={{ marginTop: 0 }}>
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
        </BoxWithLabel>
        <Box
          style={{
            marginTop: 24,
          }}>
          <Button
            onPress={() => Alert.alert('', '결제하기')}
            disabled={!isSubComplete}
            fill
            label={'42,000원 결제하기'}
            style={{
              backgroundColor: '#FC5C42',
            }}></Button>
        </Box>
      </ContainerWithScroll>
    </Container>
  );
}

export default SubCompleteScreen;
