//GET
var container = document.getElementById("user")
document.addEventListener('DOMContentLoaded', function() {
    loadUser();
});

function loadUser(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost:3000/user');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
        renderUser(ourData);
    };
    ourRequest.send();
}

function editUser(userId) {
    window.location.href = 'edit.html?id=' + userId;
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
        htmlString += "<button class='btn btn-warning btn-sm' onclick='editUser(" + user[i].id + ")'>Edit</button>";
        htmlString += " ";
        htmlString += "<button class='btn btn-danger btn-sm' onclick='deleteUser(" + user[i].id + ")'>Delete</button>";
        htmlString += "</td>";
        htmlString += "</tr>";
    }
    container.insertAdjacentHTML('beforeend', htmlString);
}

//POST
var add = document.getElementById("add");
add.addEventListener("click", addUser);
function addUser(){
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var newUser = {
        id: id,
        name: name,
        username: username,
        email: email,
        phone: phone
    }

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('POST', 'http://localhost:3000/user');
    ourRequest.setRequestHeader('Content-Type', 'application/json');
    ourRequest.onload = function() {
        alert('Success');
        
    };
    ourRequest.send(JSON.stringify(newUser));
}


//DELETE
function deleteUser(userId) {
    var confirmation = confirm("Bạn có chắc chắn muốn xóa người dùng này không?");
    if (confirmation) {
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('DELETE', 'http://localhost:3000/user/' + userId);
        ourRequest.onload = function() {
            if (ourRequest.status === 200) {
                alert('Người dùng đã được xóa thành công.');
                loadUser(); // Tải lại danh sách người dùng sau khi xóa
            } else {
                alert('Đã xảy ra lỗi khi xóa người dùng.');
            }
        };
        ourRequest.send();
    }
}
