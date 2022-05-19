
//Assigning DOM elements to variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

//Listen for for submission
form.addEventListener('submit', (e) => {  
//prevent default loading when form is submitted
    e.preventDefault();

  // Get values of form fields and assign to new variables
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
   
  
  //conditional statements to check if form value is valid ..... If form value is not valid an error function is triggered but if it is valid a success function is triggered

    if (usernameValue === '') {
        errorMessage(username, "Username is empty");
    } 
    else {
        successMessage(username);
    }

    if (emailValue === '') {
        errorMessage(email, "Email is empty");
    }
     else if (!validateEmail(emailValue)) {
        errorMessage(email, "Email is invalid");
    } 
    else {
        successMessage(email);
    }

    if (passwordValue.length < 6 ) {
        errorMessage(password, "Password is Weak ");
    } 
    else {
        successMessage(password);
    }


// conditional statement to check if all values are valid so the bubbles can appear
    if (username.parentElement.classList.contains('success') && email.parentElement.classList.contains('success') && password.parentElement.classList.contains('success'))
    {
        swal({
            title: 'Registration Done',
            text: 'Your Event Has been Registered',
            icon: 'success',
            button: 'Back to Home',
        });
        const obj = {}
        obj.username = usernameValue;
        obj.email = emailValue;
        obj.password = passwordValue;
        console.log(obj);
        username.value = '';
        email.value = '';
        password.value = '';

    }
});


// function to be triggered if form value is not valid. This function simply adds the error CSS class and removes that of success if it exists

function errorMessage(value, message) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('success')) {
        formControl.classList.remove('success');
        formControl.classList.add('error');
    } else {
        formControl.classList.add('error');
    }
    formControl.querySelector('.errorMessage').textContent = message;


}

// function to be triggered if form value is valid. This function simply adds the success CSS class and removes that of error if it exists

function successMessage(value) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('error')) {
        formControl.classList.remove('error');
        formControl.classList.add('success');
    } else {
        formControl.classList.add('success');
    }
}

//This is a simple function to validate the email 

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function eventSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("content");
    tr = table.getElementsByTagName("div");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("content")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }