export function toInteger(val: number | string | boolean) {
    if (typeof val == 'number' && val > Number.MAX_SAFE_INTEGER) {
        return 0;
    } else {
        return parseInt(`${val}`) || 0;
    }
}