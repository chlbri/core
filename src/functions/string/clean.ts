import { isLocalLitterals } from './isLocalLitterals';

export function isClean(value: string): boolean {
  let out = true;
  for (const iter of value) {
    if (!isLocalLitterals(iter)) {
      out = false;
      break;
    }
  }
  return out;
}

export function clean(value: string): string {
  let out = value;
  for (const iter of value) {
    if (!isLocalLitterals(iter)) {
      out = out.replace(iter, '');
    }
  }
  return out;
}
