import { AbiCoder } from 'ethers/utils/abi-coder';

const coder = new AbiCoder();

export function encodeParameters(types: any, values: Array<any>): string {
    return coder.encode(types, values);
}

export function decodeParameters(types: any, data: Array<Any>): string {
    return coder.decode(types, data);
}