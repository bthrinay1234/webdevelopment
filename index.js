var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"john.png"

    },
    {
        "name":"Jane Doe",
        "gender":"Female",
        "image":"jane.png"
    }
]
var index=0;
function toggle(){
    if(index==0){
        index=1;
    }
    else{
        index=0;
    }
    document.getElementById("user-name").innerText=users[index].name;
    document.getElementById("user-gender").innerText=users[index].gender;
    document.getElementById("user-image").src=users[index].image;
}
    function randomUser()  {
    fetch('https://randomuser.me/api/').then(function(raw_data) {
    return raw_data.json();
    }).then(function(data) {
    const user = data.results[0];
    document.getElementById("user-name").innerText = user.name.title + " " + user.name.first + " " + user.name.last;
    document.getElementById("user-gender").innerText = user.gender;
    document.getElementById("user-image").src = user.picture.large;
  });
}

