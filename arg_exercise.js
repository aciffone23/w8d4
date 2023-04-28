// function sum() {
//     let args = Array.from(arguments);
//     let total = 0;
//     args.forEach((ele) => total += ele);
//     console.log(total);
// }

function sum(...nums) {
    let total = 0
    nums.forEach((ele) => total += ele);
    console.log(total);
}


// sum(1, 2, 3, 4) // === 10;
// sum(1, 2, 3, 4, 5)  //=== 15;

// Function.prototype.myBind = function (ctx) {
//     let bindArgs = Array.from(arguments).slice(1);
//     let self = this;
//     return function ()  {
//         let callArgs = Array.from(arguments);
//         return self.apply(ctx, bindArgs.concat(callArgs));
//     };
    
// };

Function.prototype.myBind = function (ctx, ...bindArgs) {
    let self = this;
    return function (...callArgs) {
        return self.apply(ctx, bindArgs.concat(callArgs));
    };
    
}

//  markov.says.myBind(pavlov, "meow")("Markov");



class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true


//   function curriedSum(nums) {
//     let arr = [];
//     while (arr.length != nums) {return function _curriedSum(num) {
//         arr.push(num); 
//         sumAndLog(arr);
//         return _curriedSum;
//     }};
//     return sumAndLog(arr);
//   };

//   function sumAndLog(arr2) {
//     let sum = arr2.reduce((acc,ele) => {return acc + ele});
//     // console.log(sum)
//   };
function curriedSum(nums) {
  let arr = [];

  function _curriedSum(num) {
    arr.push(num);

    if (arr.length === nums) {
      let sum = arr.reduce((acc, ele) => {
        return acc + ele;
      });
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

  const sum2 = curriedSum(4);
console.log(sum2(5)(30)(20)(1)); // => 56