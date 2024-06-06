function double(arr: number[]): number[] {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
