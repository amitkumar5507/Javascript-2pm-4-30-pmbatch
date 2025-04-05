// // console.log("Hello, World!");
// let arr = [];
// arr.push(12)
// arr.push('ddd')
// arr.push(null)
// arr.push(true)
// arr.unshift(13)
// arr.shift()
// arr.pop()

// console.log(arr)
// // iterate
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i])
// }
// for(let i in arr){
//   console.log(i,"www")
// }

// function sumOfArr(arr){
//   let sum=0
//   for(let i of arr){
//   sum+=i
// }
// return sum
// }
// function mergeTwoArr(arr1,arr2){
//   return [...arr1,...arr2]
// }
// console.log(mergeTwoArr([2,3],[4,3]))


// // copy an arr 
// let x = [1,2,3,40,15,7];
// let y =[...x];
// // sort Arr 
// function bubleSort(arr){
//   for(let i =0;i<arr.length;i++){
//     for(let j =0;j<arr.length-i;j++){
//       if(arr[j]>arr[j+1]){
//         [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//       }
//     }
//   }
//   return arr;
// }

// function elementExist(arr,ele){
//   for(let i of arr){
//     if(ele === i)
//     return true
//   }
//   return false
  
// }

// // console.log(x.includes(40))
// // console.log(x.find(a=> a==41))

// // [1,2,[2,3],[4,3],[3,3,3]]
// // // [1,2,2,3,4,3,3,3,3]
// //   let temp =[]
// function flatArr(arr){
//   for(let i of arr){
//     if(Array.isArray(i)){
//       flatArr(i)
//     }
//     else{
//       temp.push(i)
//     }
//   }
//   return temp;
// }

// function join(arr){
//   let temp =''
//   for(let i of arr){
//       temp+=`${i}*`
//   }
//    return temp 
// }
// console.log(join([1,2,3,4]))


// // console.log(flatArr([1,2,[2,3],[4,3],[3,3,3]]))
//   console.log([1,2,[2,3],[4,3],[3,3,3]].flat())

// console.log((50))
// console.log(elementExist(x,40))

// x.sort((a,b)=>b-a)
// console.log(x)
// console.log(bubleSort([7,6,5,4,3,2]))
// y[5]=50
// console.log(x,y)

// [2,3] [8,9] = [2,3,8,9]


// // splice methods
// let arrs = [1,2,3,4,5];
// // (arr,3)
// [3,4,5,1,2]
// // let arrs = [1,2,3,4,5,6,5,4,3,2,1];
// // let newArr= arrs.splice(1,2,"gelcldmdl","ldklkld");
// let newArr = arrs.splice(1,0,80,90)
// console.log(newArr,arrs);

function shift(arr,n){
  let len = arr.length; //5
  n = n%len; //2
if(n<0){
  arr.splice(0,0,...arr.splice(len+n,n))
}
else{
  arr.push(...arr.splice(0,n))
}
return arr
}
// console.log(2%5);
// console.log(shift([1,2,3,4,5]))


// [1,2]
// [3,4,5,1,2]
let arr =[1,2,3,4,5,6,5,98,2]
// console.log(arr.slice(-2));
// arr.forEach((val,idx,arr)=>console.log(val,idx,arr)
// )
// console.log(arr.indexOf('3'))
// console.log(arr.lastIndexOf(5,7))

// find method 
console.log(
 arr.findLastIndex((val)=>val >3))


//  filter 
console.log(
  arr.filter((val,)=>val >20))


console.log(arr.map((val)=>{
  if(val%2 !==0){
  return val*3
  }
  else{
  return  val*4
  }

}));

// console.log(arr.includes(5,10));





