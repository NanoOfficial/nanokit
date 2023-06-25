import { AbiCoder } from 'ethers/utils/abi-coder';
import { getAddress } from 'ethers/utils/address';
import { Encode } from '../types/utils';

export class Encoder implements Encode {

  private coder: AbiCoder = new AbiCoder();

  public encodeParameters(types: any, values: Array<any>): string {
    return this.coder.encode(types, values);
  }

  public decodeParameters(types: any, data: any): any {
    return this.coder.decode(types, data);
  }

  public normalizeAddress(address: string): string {
    return address ? getAddress(address) : null;
  }

}