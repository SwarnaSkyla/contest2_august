document.addEventListener('DOMContentLoaded',()=>{
    displayUserProfile();
});


function displayUserProfile(){
    const stored=JSON.parse(localStorage.getItem('user'));
    fetch(` https://dummyjson.com/users/${stored.id}`)
      .then(res=>res.json())
      .then(userData=>{
        const profleCon=document.getElementById('profile-container');
        const profilehtml=`
           <h1>Welcome ${userData.username}!</h1>
           <p>UserID:${userData.id}</p>
           <p>Email:${userData.email}</p>
           <p>Phone Number:${userData.phone}</p>`;


           profleCon.innerHTML=profilehtml;
      })
      .catch(error=>{
        console.error("Error fetchin : ",error);
      })
}