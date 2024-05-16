var btn = document.getElementById('btn');
var container = document.getElementById('user');

btn.addEventListener('click', loadDoc);


//GET METHODS
function loadDoc(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost:3000/user');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderUser(ourData);
    };
    ourRequest.send(); 
}
function renderUser(user) {
    var htmlString = '';
    for(var i = 0; i < user.length; i++) {
        htmlString += '<p>' + user[i].name + ' is working at ' + user[i].company.name + " company" + '</p>'
        + 
        '<p>Phone number: ' + user[i].phone +  '</p>'
        + 
        '<p>Address: ' + user[i].address.street + '</p>'
        + '<br>' 
        ;
    }
    container.insertAdjacentHTML('beforeend', htmlString);
}


// //POST METHODS
// const newUser =
// {
//     id: "10",
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232"
//       }
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models"
//     }
//   }
// function loadDoc(){
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('POST', 'http://localhost:3000/user');
//     ourRequest.setRequestHeader('Content-Type', 'application/json');
//     ourRequest.onload = function() {
//         var ourData = JSON.parse(ourRequest.responseText);
//     };
//     ourRequest.send(JSON.stringify(newUser));
// }



// //PUT METHODS
// const newUser ={
//     firstName: "Nathan",
//     lastName: "James",
//     age: 31,
//     email: "nathan@gmail.com",
//     company:
//     {
//         name: "Nathan inc",
//         description: "New company"
//     },
//     financial: "broke"
// }
// function loadDoc(){
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('PUT', 'http://localhost:3000/user/11');
//     ourRequest.setRequestHeader('Content-Type', 'application/json');    
//     ourRequest.onload = function() {
//         var ourData = JSON.parse(ourRequest.responseText);
//         console.log(ourRequest);
//     };
//     ourRequest.send(JSON.stringify(newUser));
// }


// //delete methods
// function loadDoc(){
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('DELETE', 'http://localhost:3000/user/11');
//     ourRequest.setRequestHeader('Content-Type', 'application/json');
//     ourRequest.onload = function() {
//         var ourData = JSON.parse(ourRequest.responseText);
//         console.log(ourRequest);
//     };
//     ourRequest.send();
// }