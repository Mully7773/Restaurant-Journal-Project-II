//front-end code for sign up
const signUpFormHandler = async (event) => {
    event.preventDefault();
    // Grab the values from the login form
    
    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  
    if (username && email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users', { //this needs to point to create?
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // If successful, redirect the user to the create review page
      if (response.ok) {document.location.replace('/reviews');
      } else {
        alert('Please fill out the entire form');
      }
    }
  };

  var x = document.querySelector('.signup-form')
  console.log(x)
  x.addEventListener('click', signUpFormHandler);
  x.addEventListener('submit', signUpFormHandler);
