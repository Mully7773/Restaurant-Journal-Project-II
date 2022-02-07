const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        // const id = window.location.toString().split("/")[
        //     window.location.toString().split("/").length - 1
        //   ];
      const id = event.target.getAttribute('data-id');
    //   const id = event.target.dataset.data-reviewId;
  
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
        // body: JSON.stringify({
        //     id: id
        // })
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