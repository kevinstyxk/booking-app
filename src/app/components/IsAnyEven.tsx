export default function IsAnyEven(num: number[]) {

  // Checks whether an element is even
  //const even = (element: number) => element % 2 === 0;
  //return num.some(even)

  return num.some((n) => n % 2 === 0)
}