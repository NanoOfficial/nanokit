import { AbiCoder } from "ethers/utils/abi-coder";
import { getAddress } from "ethers/utils/address";
import { Encode } from "../types/utils";

export class Encoder implements Encode {
    private coder: AbiCoder = new AbiCoder();

    public encodeParameters(type: any, values: any[]): string {
        return this.coder.encode(types, values);    
    }

    decodeParameters(types: any, data: any) {
        return this.coder.decode(types, data);
    }
}