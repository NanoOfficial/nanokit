export function hexToBytes(hex: any) {
    hex = hex.toString(16).replace(/^0x/i, '');
    const bytes = [];

    for(let c = 0; c < hex.length; c+= 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16));
    }

    return bytes;
}