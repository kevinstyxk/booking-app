export default function Calculator(num: number[]) {
  return num.reduce( (acc, n) => acc + n, 0 )
  /*
  let result = 0
  num.map((n) => {
    result = result + n
    return n  
  })


  return result
  */
}