export function toTuple(obj) {
    if (!(obj instanceof Object)) {
      return [];
    }
  
    const output = [];
    let i = 0;
    Object.keys(obj).forEach((k) => {
      if (obj[k] instanceof Object) {
        output[i] = toTuple(obj[k]);
      } else if (obj[k] instanceof Array) {
        let j1 = 0;
        const temp1 = [];
        obj[k].forEach((ak) => {
          temp1[j1] = toTuple(obj[k]);
          j1++;
        });
        output[i] = temp1;
      } else {
        output[i] = obj[k];
      }
      i++;
    });
  
    return output;
}