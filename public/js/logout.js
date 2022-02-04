const { response } = require("express");

//front-end code for logging out
const logoutHandler = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      };

      document.querySelector('#logout').addEventListener('click', logoutHandler);
}