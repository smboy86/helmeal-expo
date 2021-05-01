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
import { IcoArrowUp, IcoArrowDown } from '../constants/Svgs';
// import { IcoUser, IcoRoutine, IcoHome } from '../constants/Svgs';

function SubOptionCompleteScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);
  const [selDayInfo, setSelDayInfo] = React.useState('요일 선택');
  const [selSubInfo, setSelSubInfo] = React.useState('구독 기간 선택');

  // temp
  const [collapsedDaySection, setCollapsedDaySection] = React.useState(false);
  const [collapsedSubSection, setCollapsedSubSection] = React.useState(true);

  React.useEffect(() => {
    // 구독기간 선택 후 화면 전환 & 선택 값 초기화 (시간차)
    if (selSubInfo !== '구독 기간 선택') {
      navigation.navigate('Details', {
        screen: 'SubOptionComplete',
        params: {
          day: selDayInfo,
          subDate: selSubInfo,
        },
      });
    }

    return () => {
      setTimeout(() => {
        initScreen();
      }, 1000);
    };
  }, [selSubInfo]);

  const initScreen = () => {
    setSelDayInfo('요일 선택');
    setSelSubInfo('구독 기간 선택');
    setCollapsedDaySection(false);
    setCollapsedSubSection(true);
  };

  const onMoveHome = () => {
    dispatch(login({ isLogin: true }));
    // navigation.navigate('')
  };

  const toggleDayExpanded = (type: string) => {
    switch (type) {
      case '5일':
        setSelDayInfo('5일 - 월 / 화 / 수 / 목 / 금');
        break;
      case '3일':
        setSelDayInfo('3일 - 월 / 수 / 금');
        break;
      case '2일':
        setSelDayInfo('2일 - 화 / 목');
        break;

      default:
        break;
    }

    // 1) 기존 메뉴 닫기
    setCollapsedDaySection(!collapsedDaySection);

    // 2) 다음 메뉴 열기
    setCollapsedSubSection(false);
  };

  const toggleSubExpanded = (type: string) => {
    switch (type) {
      case '1주':
        setSelSubInfo('1주');
        break;
      case '2주':
        setSelSubInfo('2주');
        break;
      case '3주':
        setSelSubInfo('3주');
        break;
      case '4주':
        setSelSubInfo('4주');
        break;

      default:
        break;
    }
  };

  return (
    <ContainerWithScroll>
      <Box full style={{ padding: 24 }}>
        <Text size={16} color={'#020202'} style={{ marginBottom: 4 }}>
          주문상품
        </Text>
        <Text bold size={24} color={'#020202'} style={{ marginBottom: 24 }}>
          헬밀 프로틴
        </Text>
        <Box
          style={{
            marginBottom: 24,
          }}>
          <BoxPressable
            // onPress={() => toggleDayExpanded('')}
            onPress={() => null}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 11,
              borderWidth: 2,
              borderColor: collapsedDaySection ? '#F5F5F5' : '#ccc',
              borderRadius: 4,
            }}>
            <Box row style={{ justifyContent: 'space-between' }}>
              <Text bold size={16} color={'#020202'}>
                {selDayInfo}
              </Text>
              {collapsedDaySection ? (
                <Box jCenter>
                  <IcoArrowUp />
                </Box>
              ) : (
                <Box jCenter>
                  <IcoArrowDown />
                </Box>
              )}
            </Box>
          </BoxPressable>
          <Collapsible collapsed={collapsedDaySection} align='center'>
            <BoxPressable
              onPress={() => toggleDayExpanded('5일')}
              style={{
                paddingHorizontal: 16,
              }}>
              <Box
                row
                style={{
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#F5F5F5',
                  paddingVertical: 11,
                }}>
                <Text size={16} color={'#1d1d1d'}>
                  5일 - 월 / 화 / 수 / 목 / 금{' '}
                </Text>
                <Text size={12} color={'#767676'}>
                  1주 / 30,000원{' '}
                </Text>
              </Box>
            </BoxPressable>
            <BoxPressable
              onPress={() => toggleDayExpanded('3일')}
              style={{
                paddingHorizontal: 16,
              }}>
              <Box
                row
                style={{
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#F5F5F5',
                  paddingVertical: 11,
                }}>
                <Text size={16} color={'#1d1d1d'}>
                  3일 - 월 / 수 / 금{' '}
                </Text>
                <Text size={12} color={'#767676'}>
                  1주 / 18,000원{' '}
                </Text>
              </Box>
            </BoxPressable>
            <BoxPressable
              onPress={() => toggleDayExpanded('2일')}
              style={{
                paddingHorizontal: 16,
              }}>
              <Box
                row
                style={{
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#F5F5F5',
                  paddingVertical: 11,
                }}>
                <Text size={16} color={'#1d1d1d'}>
                  2일 - 화 / 목{' '}
                </Text>
                <Text size={12} color={'#767676'}>
                  1주 / 12,000원{' '}
                </Text>
              </Box>
            </BoxPressable>
          </Collapsible>
        </Box>
        {/* 2) 구독 기간 선택 */}
        <Box
          style={{
            marginBottom: 24,
          }}>
          <BoxPressable
            // onPress={() => toggleSubExpanded('')}
            onPress={() => null}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 11,
              borderWidth: 2,
              borderColor: collapsedSubSection ? '#F5F5F5' : '#ccc',
              borderRadius: 4,
            }}>
            <Box row style={{ justifyContent: 'space-between' }}>
              <Text bold size={16} color={'#020202'}>
                {selSubInfo}
              </Text>
              {collapsedSubSection ? (
                <Box jCenter>
                  <IcoArrowUp />
                </Box>
              ) : (
                <Box jCenter>
                  <IcoArrowDown />
                </Box>
              )}
            </Box>
          </BoxPressable>
          <Collapsible collapsed={collapsedSubSection} align='center'>
            <BoxPressable
              onPress={() => toggleSubExpanded('1주')}
              style={{
                paddingHorizontal: 16,
              }}>
              <Box
                row
                style={{
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#F5F5F5',
                  paddingVertical: 11,
                }}>
                <Text size={16} color={'#1d1d1d'}>
                  1주
                </Text>
                <Text size={12} color={'#767676'}>
                  30,000원
                </Text>
              </Box>
            </BoxPressable>
            <BoxPressable
              onPress={() => toggleSubExpanded('2주')}
              style={{
                paddingHorizontal: 16,
              }}>
              <Box
                row
                style={{
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#F5F5F5',
                  paddingVertical: 11,
                }}>
                <Text size={16} color={'#1d1d1d'}>
                  2주
                </Text>
                <Text size={12} color={'#767676'}>
                  60,000원
                </Text>
              </Box>
            </BoxPressable>
            <BoxPressable
              onPress={() => toggleSubExpanded('3주')}
              style={{
                paddingHorizontal: 16,
              }}>
              <Box
                row
                style={{
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#F5F5F5',
                  paddingVertical: 11,
                }}>
                <Text size={16} color={'#1d1d1d'}>
                  3주
                </Text>
                <Text size={12} color={'#767676'}>
                  90,000원
                </Text>
              </Box>
            </BoxPressable>
            <BoxPressable
              onPress={() => toggleSubExpanded('4주')}
              style={{
                paddingHorizontal: 16,
              }}>
              <Box
                row
                style={{
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#F5F5F5',
                  paddingVertical: 11,
                }}>
                <Text size={16} color={'#1d1d1d'}>
                  4주
                </Text>
                <Text size={12} color={'#767676'}>
                  120,000원
                </Text>
              </Box>
            </BoxPressable>
          </Collapsible>
        </Box>
      </Box>
    </ContainerWithScroll>
  );
}

export default SubOptionCompleteScreen;
