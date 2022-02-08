const delButtonHandler = async (event) => {
  console.log(event.target);
    if (event.target.hasAttribute('data-id')) {

      const id = event.target.getAttribute('data-id');
      console.log("id", id)
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/archives');
      } else {
        alert('Failed to delete review');
      }
    }
  };
  
  document
    .querySelector('.x-button')
    .addEventListener('click', delButtonHandler);