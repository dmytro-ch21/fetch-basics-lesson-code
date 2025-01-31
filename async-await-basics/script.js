console.log('Async Await');

// const promise = new Promise((resolve, reject) => {
//   // async task
//   setTimeout(() => {
//     resolve({ name: 'John', age: 35 });
//   }, 2000);
// });

// // promise.then((data) => {
// //   console.log(data);
// // });

// console.log('After promise execution...');

// // Using async/await is a replacement for then and callbacks for it
// // The code will become sequential and cleaner

// // async function getPromise() {
// //     const response = await promise;
// //     console.log("Promise resolved: ", response)
// // }

// // getPromise();

// // have a function with fetch().then()
// function getUsersThen() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((resp) => resp.json())
//     .then((data) => console.log(data));
// }

// getUsersThen();

// // have a function with await fetch()
// async function getUsersAwait() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   console.log('Users: ', data);
// }

// getUsersAwait();

// // what if weant to have an arrow function async
// const myAsyncArrowFunction = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log('Users: ', data);
// }

// myAsyncArrowFunction();

// Catching and handling errors
// try catch

// try {
//     console.log(x)
// } catch (error){
//     console.log(error)
// }

// console.log('after error in code')

// create a function with custome error
// function multiplyByTwo(number) {
//     if(isNaN(number)){
//         throw new Error(number + ' is not a number!');
//     }

//   return number * 2;
// }

// try {
//     multiplyByTwo('hello');
// } catch (error){
//     console.log(error)
// }

const getUsersWithTryCatch = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/267235467'
    );
    if (!response.ok) {
      throw new Error('Request failed with: ' + response.status);
    }
    const data = await response.json();
    console.log('Users: ', data);
  } catch (err) {
    console.log('Async/Await Error: ', console.error(err));
  }
};

getUsersWithTryCatch();

// const getUsersWithThenCatch = async () => {
//   fetch('https://jsonplaceholder.typicode.com/users/267235467')
//     .then((resp) => {
//       if (!resp.ok) {
//         throw new Error('Request Failed - This is not good!');
//       }
//       return resp.json();
//     })
//     .then((data) => console.log('Users: ', data))
//     .catch((error) => console.log(error));
// };
