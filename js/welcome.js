var logout = document.getElementById("close")
var NAmelog= localStorage.getItem('Name')
var lastVa = document.getElementById('LastName')

lastVa.innerHTML=NAmelog 


logout.addEventListener('click' , function(){
localStorage.removeItem('Name')
window.location.href='index.html'
  
})

