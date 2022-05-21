// Data type
// Type of the Data


// Categories 
  // Primitive, Composite, userdefined

  // Primitive ---> in built types
  // String, Number(NaN), Boolean, undefined




var a = 23; // Number


console.log(Number.isNaN(str));

console.log(a);
console.log(typeof undefined)



var str = "Sanjay"; // String
console.log(str);


var x = true; // boolean
console.log(typeof x);


let y = 24; // let, const scoped to immediate opening & closing braces


function SampleFunc() {

  {
    var z = 23;
    let p = 20;
  }

  console.log(z);
  console.log(p);

}


// SampleFunc();

// Composite ---> typeof var ---> object
// Objects(null)

// Array

// int arr = int[];
var arr = [1,2,3, "Sanjay", true, false, 23.7];

// arr[100] = "Something";

// console.log(arr.length);

var arr2 = [];

arr2[0] = [1,2,3,[4,5,6]]; 
arr2[1] = [1,2,3];
arr2[2] = [1,2,3];
 
console.log(arr2);
console.log(typeof arr2);
console.log(Object.keys([1,2,3]));
console.log(Object.values([1,2,3]));



// Objects  ---> Key value pairs
var obj = {
  name: "Sanjay",
  role: 'Developer',
  hobbies: ["Web series", "Coding"],
  skill: "JS",
  bio: {
    DOB: "YY-MM-DD",
    AGE: "XX"
  }
}

console.log(obj); // Object.keys();
console.log(Object.values(obj));

console.log(obj.role === "Developer");



