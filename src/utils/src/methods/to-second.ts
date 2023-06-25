export function toSeconds(milliseconds: number) {
    return parseInt(`${parseFloat(`${milliseconds}`) / 1000}`) || 0;
}