import React from 'react';
import { Animated, Easing, Image } from 'react-native';
// import FastImage from 'react-native-fast-image';

interface IProps {
  focused: boolean;
  icon: any;
  iconOn: any;
}

const BottomIcon: React.FunctionComponent<IProps> = (props: IProps) => {
  const opacityValue = new Animated.Value(0);

  React.useEffect(() => {
    if (props.focused) {
      show();
    } else {
      opacityValue.setValue(1);
    }
  });

  function show() {
    opacityValue.setValue(0);

    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 120,
      easing: Easing.linear,
      delay: 40,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View style={{ opacity: opacityValue }}>
      <Image
        source={props.focused ? props.iconOn : props.icon}
        style={{ width: 25, height: 25 }}
      />
    </Animated.View>
  );
};

export default BottomIcon;
