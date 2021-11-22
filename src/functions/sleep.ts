export function sleep(millis: number): Promise<unknown> {
  return new Promise(resolve => setTimeout(resolve, millis));
}
