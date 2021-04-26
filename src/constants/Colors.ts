const tintColorLight = '#FC5C42';
const tintColorDark = '#fff';

export default {
  default: {
    backgroundTintColor: '#FFF',
    backgroundSoftYellowColor: '#FFFAEC',
    tint: tintColorLight,
    text: '#000000',
    red: '#FACE56',
    gray: '#767676',
    softYellow: '#FEF2D3',
    fontSoftBlack: '#363636',
  },
  light: {
    tint: tintColorLight,
    text: '#000',
    unChecked: '#CACACA',
    background: '#fff',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    tint: tintColorDark,
    text: '#fff',
    unChecked: '#CACACA',
    background: '#000',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
