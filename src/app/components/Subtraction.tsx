export default function Subtraction(num: number[]) {
  let initValue = num.sort((a, b) => b - a).shift();
  return num.reduce( (acc: number, n: number) => acc - n, initValue!! ) 
}