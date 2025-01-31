console.log('Fetch API File!');

// const promise = new Promise((resolve, reject) => {
//     // async task
//     setTimeout(() => {
//         resolve({name: 'John', age: 35});
//     }, 2000)
// })

// promise.then((data) => {console.log(data)});

// console.log('After promise execution...');

// -----------------  FETCH  ------------------- //

// const resultOfFetch = fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(resultOfFetch);
// resultOfFetch
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => console.log(data));

// // cleaner version
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

// -----------------  User API - render a card  ------------------- //
// fetch('https://randomuser.me/api/')
//   .then(resp => resp.json())
//   .then(data => {
//     const user = data.results[0];
//     renderUserCard(user);
//   });

//   function renderUserCard(user){
//     document.body.innerHTML = `
//      <div class="container m-5">
//         <div class="col-6">
//             <div class="card">
//                 <img class="card-img-top" src="${user.picture.large}" alt="">
//                 <div class="card-header">
//                     <div class="card-title m-0 fw-bold text-center">${user.name.first} ${user.name.last}</div>
//                 </div>
//                 <div class="card-body">
//                     <div class="card-text">
//                         <strong>Phone:</strong> ${user.cell}
//                         <div></div>
//                         <strong>Address:</strong>
//                         ${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.state}  ${user.location.postcode} ${user.location.country}
//                     </div>
//                 </div>
//                 <div class="card-footer">
//                     <div class="card-text">
//                         <strong>email:</strong> ${user.email}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//   }

// -----------------  Creating Utility Functions  ------------------- //

// function getPosts(){
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(resp => resp.json())
//         .then(data => {
//             console.log('Request Successful')
//             console.log(data)
//             return data;
//         })
// }

// function getPostById(id){
//     return fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//     .then(resp => resp.json())
//     .then(data => {
//         console.log('Request Successful')
//         console.log(data)
//         return data;
//     })
// }

// getPosts();
// getPostById(23874623754);

// -----------------  fetch with parameters  ------------------- //
// HTTP -> GET, POST, PUT/PATCH, DELETE
// When we do not provide any details about what the request method is,
// It will always result to GET
// How do we pass different method, headers, parameters etc...

// function createPost({title, body, userId}) {
//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   fetch(url, {
//     method: 'POST',
//     body: JSON.stringify({
//       title,
//       body,
//       userId,
//     }),
//     headers: {
//       'Content-type': 'application/json',
//       'Authentication': '123abc',
//       hello: 'Hello World'
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// const myPost = {
//     title: 'My new title 2025',
//     body: 'Post body 2025',
//     userId: 1,
//   }

// createPost(myPost);

// -----------------  fetch with parameters  ------------------- //

// fetch('https://httpstat.us/500')
//   .then((resp) => {
//     console.log(resp.ok);
//     console.log(resp.status);
//     console.log(resp.statusText);
//     return resp;
//   })
//   .then(() => console.log('Response Was Successfull'))
//   .catch(() => console.log('There Is An Error!!!'))

  fetch('https://httpstat.us/400')
  .then((resp) => {
    // console.log('Response: ', resp.ok);
    // console.log('Status Code: ', resp.status);
    // console.log('Status: ', resp.statusText);

    // logic that checks if status is ok
    if(!resp.ok){
        throw new Error('Request Failed - This is not good!');
    }

    return resp;
  })
  .then(() => console.log('Response Was Successfull'))
  .catch((error) => console.log(error))

// capture specific codes
// fetch('https://httpstat.us/404')
//   .then((resp) => {
//     // console.log('Response: ', resp.ok);
//     // console.log('Status Code: ', resp.status);
//     // console.log('Status: ', resp.statusText);

//     // logic that checks if status is ok
//     if (resp.status === 400) {
//       throw new Error('Bad Request, check the payload!');
//     } else if (resp.status === 404) {
//       throw new Error('There is no such record, check the params!');
//     } else if (resp.status === 500) {
//       throw new Error('There is an real issue in the code of the app!');
//     } else if (resp.status !== 200) {
//       throw new Error('Request Failed!');
//     }
//     return resp;
//   })
//   .then(() => console.log('Response Was Successfull'))
//   .catch((error) => console.log(error));
  
// host and endpoint


