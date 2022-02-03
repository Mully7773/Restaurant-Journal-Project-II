const loginFormHandler = async (event) => {
    event.preventDefault();
  
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
  
      if (response.ok) {
        // If successful, redirect the user to the create review page
        document.location.replace('/reviews');
      } else {
        alert('Please check your email or password');
      }
    }
  };

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);