console.log("Hello, World!");

// console.log(typeof 1)
// console.log('1')
// console.log(typeof String(1));
// // '1'->1
// console.log(typeof Number('1'))
// console.log(typeof +'1');

// console.log('3' + '2')
// console.log((3+3+'1' + 2 +2) )
// console.log(isNaN("2a"))
// console.log( 6 - 'a' )
// console.log('6' / '2')
// let x = -5
// console.log(-x)
// console.log(+true,+false)
// console.log(1+2*3)
// flasy value 
// 0 undefined null '' false NAN

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);
// // console.log(a)

// let a,b,c;
// a = b = c = 2 + 2;
// console.log(a,b,c)

// let n = 2;
// n += 5;
// n *= 2;

// console.log(n)

// let n = 2;


// console.log(++n)
// console.log(n)

// let counter = 1;
// console.log( 2 * ++counter );
// console.log(Number("  -9  ")+5)

// let result = 5 > 4;
// console.log(result)

// let ax = "0";
// console.log( Boolean(ax) );
// console.log( null == undefined );
for(let i in Math){
  
}
console.log(Math)

// console.log("z" > "70")




// suman & piyush 
// spuimy

// function cancate(str1,str2){
//   let i =0;
//   let newStr=''
//   while(i < str2.length && i<str1.length){
//     newStr+=str1[i];
//     newStr+=str2[i];
//     i++
//   }
//   console.log(newStr)
  
// }
// cancate('qqqq','pppp')

// *
// **
// ***
// ****
// *****

function sq(){
  for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
      console.log(i,j)
    }
  }
}
// sq()

function rightAngle(n){
  let str = ''
  for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
      str+='X '
    }
    str+='\n'
    // console.log("x".repeat(i));
  }
  console.log(str)
}
rightAngle(4)


function rect(n){
  let str =''
  for(let i =1;i<=n;i++){
    
    for(let j=1;j<=n;j++){
      str+='X'
      
    }
    str+='\n'
  }
  console.log(str)
}
// rect(6)
function hollowTri(n){
  let str ='';
  for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
      if(j==1 || j==i ||i==n ){
        str+="X"
      }
      else{
        str+=" "
      }
    }
    str+='\n'
  }
  console.log(str);
}
// hollowTri(5)
function tri(n){
  let str= '';
  for(let i=n;i>=1;i--){
    for(let j=i;j>=1;j--){
      str+='X'
    }
    str+='\n'
  }
  console.log(str)
}
// tri(5)
function reverseTri(n){
  let str= ''
  for(let i=1;i<=n;i++){
    for(let j =1 ;j<=(n-i);j++ ){
        str+=" "
    }
    for(let k=1;k<=i;k++){
      str+="X"
    }
  str+="\n"
  }
  console.log(str)
}
reverseTri(5)

