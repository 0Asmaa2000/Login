var formLogin = document.getElementById("Formlogin");
var EmailInput1 = document.getElementById("Email1");
var PassWordInput1 = document.getElementById("Pass1");
var IncorrectAlert =document.getElementById("Incorrect")
var loginContainer = [];
if (localStorage.getItem("Information")!==null){
    loginContainer=JSON.parse(localStorage.getItem("Information"))
}
console.log(loginContainer);

formLogin.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("hello");
    Addlogin()
  
})
function Addlogin() {
    var UserInfo = {
      email:EmailInput1.value,
      password: PassWordInput1.value,

    }
    if (loginvalide(UserInfo)==true) {
        IncorrectAlert.classList.replace('d-block' , 'd-none');
        window.location.href='Welcome.html'
    }
else{
    IncorrectAlert.classList.replace('d-none' , 'd-block');
}}
    

    function loginvalide(UserInfo){
        for(i=0 ; i < loginContainer.length ;i++)
{
   if(loginContainer[i].email.toLowerCase() ==UserInfo.email.toLowerCase() && loginContainer[i].password== UserInfo.password) {
console.log('fullll');
localStorage.setItem('Name',loginContainer[i].Name)
return true
   }
}
    }