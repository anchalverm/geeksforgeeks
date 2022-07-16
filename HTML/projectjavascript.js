const allUsers= document.getElementsByClassName('users')[0];
const message=document.getElementsByClassName('message')[0];
const searchField=document.getElementsByName("user-change")[0];

var allUsersData;

searchField.addEventListener('keyup',function()
{
const value= this.value;

const filteredUsers= allUsersData.filter((user)=>{
    return user.firstName.toLowerCase().startsWith(value);
})
removeExistingUsers();
loadUsers(filteredUsers);
showUsers();

});
function removeExistingUsers(){
    allUsers.innerHTML='';
}

fetch("https://dummyapi.io/data/v1/User",
{
    "method":"GET",
    headers:{
        "app-id":"62c41b84851f4f16ffa99fad"
    }

})
.then(response=> response.json())
.then(data=>{
    allUsersData=data.data;
    loadUsers(data.data);
    hideLoadingMessage();
    showUsers();
});
function hideLoadingMessage(){
    message.style.display="none";
}
function showUsers(){
    allUsers.style.display="flex";
}
function loadUsers(users){
    
    users.forEach((user)=>
    {
    const usercard=createUserCard(user);
    allUsers.appendChild(usercard);
        
    })
}
function createUserCard(user)
{
const userDiv=document.createElement('div');
userDiv.className="user";
userDiv.id=user.id;
 const userImageDiv=document.createElement('div');
 userImageDiv.className="user-image";
  
 const imageElement=document.createElement('img');
 imageElement.setAttribute('src',user.picture);
 userImageDiv.appendChild(imageElement);

 const userDetailsDiv=document.createElement('div');
 userDetailsDiv.className="user-details";
 const heading=document.createElement('h2');
 heading.textContent=' ${user.title} ${user.firstName} ${user.lastName}';
 userDetailsDiv.appendChild(heading);

 const button=document.createElement('button');
 button.textContent="See Complete details";

 userDiv.appendChild(userImageDiv);
 userDiv.appendChild(userDetailsDiv);
 userDiv.appendChild(button);
 return userDiv;
}




