const x = 'hello' as number // error
const y = ('hello' as any) as number  // yes
const y1 = ('hello' as unknown) as number  // yes
const z = <number> 'hello' // error
const w = <number>(<any>'hello') // yes


let aa = undefined // aa的类型为undefined

let bb = null // bb的类型为null

// 非null和undefined 断言

function toup(str: string | null) {
  console.log(str!.toUpperCase()) // !断言str为非null和undefined  容易有问题
  // 推荐使用 ?
  console.log(str?.toUpperCase())
}


// param is typename

interface Fish {
  swim: () => void
}
interface Bird {}

// 约束返回值类型
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let fish: Fish = { 
  swim() {}
}
let bird: Bird = {} 
let animal = Math.random() > 0.5 ? fish : bird
if(isFish(animal)) { 
  // 因为判断条件一定为trusy
  // 所以animal在这里一定是fish
  console.log(animal.swim)
}

