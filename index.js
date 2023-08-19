const loginbtn=document.getElementById("login-button");

const loginCon=document.getElementById("login-container");
// const profleCon=document.getElementById("profile-container");
const errorMsg=document.getElementById('error-message');


loginbtn.addEventListener("click",()=>{

    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    const data={
        username:username,
        password:password,
    };

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        })
        .then(res => res.json()
        )
        
        .then((responseData) =>{
            console.log(responseData);
            // console.log(responseData.status);
            localStorage.setItem('user',JSON.stringify(responseData));
                // loginCon.style.display='none';
    
                // profleCon.style.display='block';
                window.location.href='./profile.html';
            if(responseData.status ===200){
                // console.log("Hello");
                localStorage.setItem('user',JSON.stringify(responseData));
                // loginCon.style.display='none';
    
                // profleCon.style.display='block';
                window.location.href='./profile.html';
                displayUserProfile();
            }
            else{
                // console.error(responseData.error);
                errorMsg.textContent=responseData.error;
            }
        })
        .catch(error=>{
            console.error("Error:",error);
        });

});


