//inch to feet, 12inch = 1feet

// var inch = 60;
// var feet = inch/12;
// console.log(feet);

// function inchToFeet(inch){
//     var feet = inch/12;
//     return feet;
// }
// var feet = inchToFeet(60);
// console.log(feet);


//Check a year is Leap year or not.
// var year = 2300;
// if(year%4 == 0){
//     if(year%100 == 0){
//         if(year%400 == 0){
//             console.log("Leap Year");
//         }
//         else{
//             console.log("Not a Leap Year");
//         }
//     }
//     else{
//         console.log("Leap Year")
//     }
// }
// else{
//     console.log("Not a Leap Year");
// }

//Calculate Factorial of a number using loop
// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// var fact = 1;
// for(var i=1; i<=5; i++){
//     fact = fact*i;
// }
// console.log(fact);

//Calculate Factorial of a number using while loop
// var fact = 1;
// var i=1;
// while(i<=5){
//     fact = fact*i;
//     i++;
// }
// console.log(fact);

//Calculate Factorial in a Recursive Function
// function factorial(n){
//     if(n == 0){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1);
        
//     }
// }
// var result = factorial(3);
// console.log(result);

//Create a Fibonacci series using a for loop
// fibo[2] = fibo[2-1]+fibo[2-2]
// fibo[3] = fibo[3-1]+fibo[3-2]
// fibo[4] = fibo[4-1]+fibo[4-2]
// fibo[5] = fibo[5-1]+fibo[5-2]
// fibo[i] = fibo[i-1]+fibo[i-2]
// var fibo = [0, 1];
// for(var i=2; i<=5; i++){
//     fibo[i] = fibo[i-1]+fibo[i-2]
// }
// console.log(fibo);


//Fibonacci Element in Recursive way
// function recursive(n){
//     if(n == 0){
//         return 0;
//     }
//     else if(n == 1){
//         return 1;
//     }
//     else{
//         return recursive(n-1)+recursive(n-2)
//     }
// }
// var result = recursive(3);
// console.log(result);

//Fibonacci Series in Recursive way
//[0,1,1,2,3,5,8]
// function fibonacci(n){
//     if(n==0){
//         return [0]
//     }
//     else if(n==1){
//         return [0, 1]
//     }
//     else{
//         var fibo = fibonacci(n-1);
//         var nextElement = fibo[n-1]+fibo[n-2];
//         fibo.push(nextElement);
//         return fibo;

//     }
// }
// var result = fibonacci(10);
// console.log(result);


//Check whether a number is prime number or not
// function isPrime(num){
//     for(var i=2; i<num; i++){
//         if(num%i == 0){
//            return "Your number is not a prime number";
//         }

//     }
//     return "Your number is prime number";
// }
// var primeOrNot = isPrime(10);
// console.log(primeOrNot);