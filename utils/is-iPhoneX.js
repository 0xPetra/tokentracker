import { Dimensions, Platform } from 'react-native';

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');
const isIPhoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  ((D_HEIGHT === 812 || D_WIDTH === 812) || (D_HEIGHT === 896 || D_WIDTH === 896));

export default isIPhoneX;
