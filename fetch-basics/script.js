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
fetch('https://randomuser.me/api/')
  .then(resp => resp.json())
  .then(data => {
    const user = data.results[0];
    renderUserCard(user);
  });

  function renderUserCard(user){
    document.body.innerHTML = `
     <div class="container m-5">
        <div class="col-6">
            <div class="card">
                <img class="card-img-top" src="${user.picture.large}" alt="">
                <div class="card-header">
                    <div class="card-title m-0 fw-bold text-center">${user.name.first} ${user.name.last}</div>
                </div>
                <div class="card-body">
                    <div class="card-text">
                        <strong>Phone:</strong> ${user.cell}
                        <div></div>
                        <strong>Address:</strong> 
                        ${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.state}  ${user.location.postcode} ${user.location.country}
                    </div>
                </div>
                <div class="card-footer">
                    <div class="card-text">
                        <strong>email:</strong> ${user.email}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  }

