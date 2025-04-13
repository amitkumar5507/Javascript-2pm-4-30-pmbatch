<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- <script type="module" src="/src/main.jsx"> -->
      <script>     console.log("fff")
        let obj1 = {
        name:"pritam",
        age:20,

      }
      function sayName(p,pa){
          console.log(⁠ your name is ${this.name} ${this.age} ${p},${pa} ⁠); 
        }
      
      let obj2 = {
        name:"ram",
        age:20

      }
      let obj3 = {
        name:"shayam",
        age:20,
      }
      let obj4 = Object.create(obj3)
      // console.log(obj4);
      
      // console.log(obj4.name);
      // // call apply bind
      // sayName.call(obj1,"kfkf","dkdkfjd")
      // sayName.apply(obj1,["kfkf","dkdkfjd"])
      // let fg= sayName.bind(obj1,"kfkf","dkdkfjd")
      // fg()
      // console.log(obj1);
      // function + obj 
      function fn(){

      }
      fn.meraHello =()=>{
        console.log("fffff");
        
      }
      fn.meraHello()
      // console.log(Array.prototype);
      
        
      // console.log(fn.prototype,'dd');
      
     let userMethods = {
      saydescription(){
            console.log(this,'this');
            console.log(this.age,this.email,this.name);
            
            
          }
        }

      function CreateUser(name,age,email,phone){
        // let obj = Object.create(userMethods)
        //    obj.name =name
        //   obj.age = age
        //   obj.email = email
        //   obj.phone = phone
        //   return obj
        this.name = name
        this.age = age;
        this.email = email;
        this.phone = phone;

        CreateUser.prototype.sayName=()=>{
          console.log(this,'this');
            console.log(this.age,this.email,this.name);
            
            
        }
        
      }
      
      
      
      function CreateUser1(name,age,email,phone){
       
        this.name = name
        this.age = age;
        this.email = email;
        this.phone = phone;

        CreateUser.prototype.sayName=()=>{
          console.log(this,'this');
            console.log(this.age,this.email,this.name);
            
            
        }
        
      }
      
      let user1=new CreateUser('pritm',20,'pritam@gmail','1234')
      // let user2= createUser('pritm',20,'pritam@gmail','1234')
      // let user3= createUser('pritm',20,'pritam@gmail','1234')
      // let user4= createUser('pritm',20,'pritam@gmail','1234')
      console.log(user1.sayName());
      
      
      
      
      
    </script>
  </body>
</html>