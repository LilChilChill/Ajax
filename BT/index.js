var load = document.getElementById('load');
var container = document.getElementById("user")
load.addEventListener('click', loadUser);

function loadUser(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
        renderUser(ourData);
    };
    ourRequest.send();
}

function renderUser(user) {
    var htmlString = '';
    for(var i = 0; i < user.length; i++) {
        htmlString += "<tr>";
        htmlString += "<td>" + user[i].id + "</td>";
        htmlString += "<td>" + user[i].name + "</td>";
        htmlString += "<td>" + user[i].username + "</td>";
        htmlString += "<td>" + user[i].email + "</td>";
        htmlString += "<td>" + user[i].phone + "</td>";
        htmlString += "<td>";
        htmlString += "<a class='btn btn-warning btn-sm'>Sửa</a>";
        htmlString += "<a class='btn btn-warning btn-sm' hidden >Lưu</a>";
        htmlString += " ";
        htmlString += "<a class='btn btn-danger btn-sm' >Xóa</a>";
        htmlString += "</td>";
        htmlString += "</tr>";
    }
    container.insertAdjacentHTML('beforeend', htmlString);
}

