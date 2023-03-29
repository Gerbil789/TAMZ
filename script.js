var app = {};
window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

const users = [];
const selectedUser = null;

function loadList() {
  users.forEach((user) => {
    addToList(user);
  })
}


function addToList(user){
  var list = document.getElementById('userList');
  const listItem = document.createElement('ons-list-item');
  listItem.innerText = `${user.firstName} ${user.lastName} (${user.age})`;
  listItem.setAttribute('tappable')
  listItem.onclick = function() {
    selectedUser = user;
    app.showFromObject();
  };
  
  list.appendChild(listItem);
}

function CreateNewUser(){
  var user = ({
    firstName: document.getElementById('fname').value,
    lastName: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    age: document.getElementById('age').value,
  });
  users.push(user);


  fn.load('home.html')
}

function DeleteUser(user){
  list = list.filter(item => item !== user)
}

function CopyUser(){

}

function EditUser(){

}


app.showFromObject = function () {
  ons.openActionSheet({
    //title: 'From object',
    cancelable: true,
    buttons: [
      'Edit',
      {
        label: 'Delete',
        modifier: 'destructive'
      },
      'Copy',
      'Cancel'
    ]
  }).then(function (index) { console.log('index: ', index) });
};