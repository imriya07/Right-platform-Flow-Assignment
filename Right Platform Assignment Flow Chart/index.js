const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#pwd');
  const pass = document.querySelector('#pwd2332');


  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    pass.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
    
});

function add(value){
  const password = document.querySelector('#pwd');
  const pass = document.querySelector('#pwd2332');
  if(password.value === pass.value){
    alert("Thanks for choosing Right Platform Affiliate Program, our team will revert in 24 hrs.");

  }
  else{
    alert("password not match")
  }
}