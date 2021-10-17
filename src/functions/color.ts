import {
  Color1Digit,
  Color2Digits,
  ColorNumberDigits,
  RGBA1,
  TransparencyDigits,
} from '../types';

export function rgba(
  red: ColorNumberDigits,
  green: ColorNumberDigits,
  blue: ColorNumberDigits,
  alpha: TransparencyDigits,
): string {
  return `rgba(${red},${green},${blue},${alpha})`;
}

export function colorHex1(
  red: Color1Digit,
  green: Color1Digit,
  blue: Color1Digit,
  alpha?: Color1Digit,
): RGBA1 {
  return `#${red}${green}${blue}${alpha ?? ''}`;
}

export function colorHex2(
  red: Color2Digits,
  green: Color2Digits,
  blue: Color2Digits,
  alpha?: Color2Digits,
): string {
  return `#${red}${green}${blue}${alpha ?? ''}`;
}
