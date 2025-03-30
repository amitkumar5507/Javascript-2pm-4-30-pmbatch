// console.log("Hello, World!");
let arr = [];
arr.push(12)
arr.push('ddd')
arr.push(null)
arr.push(true)
arr.unshift(13)
arr.shift()
arr.pop()

console.log(arr)
// iterate
for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}
for(let i in arr){
  console.log(i,"www")
}

function sumOfArr(arr){
  let sum=0
  for(let i of arr){
  sum+=i
}
return sum
}
function mergeTwoArr(arr1,arr2){
  return [...arr1,...arr2]
}
console.log(mergeTwoArr([2,3],[4,3]))


// copy an arr 
let x = [1,2,3,40,15,7];
let y =[...x];
// sort Arr 
function bubleSort(arr){
  for(let i =0;i<arr.length;i++){
    for(let j =0;j<arr.length-i;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  return arr;
}

function elementExist(arr,ele){
  for(let i of arr){
    if(ele === i)
    return true
  }
  return false
  
}

// console.log(x.includes(40))
// console.log(x.find(a=> a==41))

// [1,2,[2,3],[4,3],[3,3,3]]
// // [1,2,2,3,4,3,3,3,3]
//   let temp =[]
function flatArr(arr){
  for(let i of arr){
    if(Array.isArray(i)){
      flatArr(i)
    }
    else{
      temp.push(i)
    }
  }
  return temp;
}

function join(arr){
  let temp =''
  for(let i of arr){
      temp+=`${i}*`
  }
   return temp 
}
console.log(join([1,2,3,4]))


// console.log(flatArr([1,2,[2,3],[4,3],[3,3,3]]))
  console.log([1,2,[2,3],[4,3],[3,3,3]].flat())

// console.log((50))
// console.log(elementExist(x,40))

// x.sort((a,b)=>b-a)
// console.log(x)
// console.log(bubleSort([7,6,5,4,3,2]))
// y[5]=50
// console.log(x,y)

// [2,3] [8,9] = [2,3,8,9]
