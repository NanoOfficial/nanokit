import { bigNumberify as toBN } from "ethers/utils/bignumber";
import { BigNumber } from "ethers/utils/bignumber";

export function bigNumberify(value: any) {
    return toBN(value);
}
