export interface Encode {
    normalizeAddress(address: string): string;

    encodeParameters(type: any, values: Array<any>): string;

    decodeParameters(types: any, data: any): any;
}