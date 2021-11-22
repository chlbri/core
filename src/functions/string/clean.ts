import { isStringLocalLitterals } from './isStringLocalLitterals';

export function isClean(value: string): boolean {
  let out = true;
  for (const iter of value) {
    if (!isStringLocalLitterals(iter)) {
      out = false;
      break;
    }
  }
  return out;
}

export function clean(value: string): string {
  let out = value;
  for (const iter of value) {
    if (!isStringLocalLitterals(iter)) {
      out = out.replace(iter, '');
    }
  }
  return out;
}
