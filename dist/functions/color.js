export function rgba(red, green, blue, alpha) {
    return `rgba(${red},${green},${blue},${alpha})`;
}
export function colorHex1(red, green, blue, alpha) {
    return `#${red}${green}${blue}${alpha !== null && alpha !== void 0 ? alpha : ''}`;
}
export function colorHex2(red, green, blue, alpha) {
    return `#${red}${green}${blue}${alpha !== null && alpha !== void 0 ? alpha : ''}`;
}
