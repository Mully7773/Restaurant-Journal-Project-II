const loginFormHandler = async (event) => {
    event.preventDefault();
  console.log("test");
    // Grab the values from the login form
    
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#passWord').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // If successful, redirect the user to the create review page
      if (response.ok) {document.location.replace('/reviews');
      } else {
        alert('Please check your email or password');
      }
    }
  };

  var x = document.querySelector('.login-form')
  console.log(x)
  x.addEventListener('click', loginFormHandler);
  x.addEventListener('submit', loginFormHandler);