const signUpFormHandler = async (event) => {
    event.preventDefault();
    
    
    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  
    if (username && email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users', { 
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // If successful, redirect the user to the create review page
      if (response.ok) {document.location.replace('/reviews');
      } else {
        alert('Your password must be at least eight characters');
      }
    }
  };

  var x = document.querySelector('.signup-form')
  console.log(x)
  x.addEventListener('click', signUpFormHandler);
  x.addEventListener('submit', signUpFormHandler);
