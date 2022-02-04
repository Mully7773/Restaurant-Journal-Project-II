const newReviewHandler = async (event) => {
    event.preventDefault();

    // console.log(event.target.dataset.userid);
    const user_id = event.target.dataset.userid;
  
    const restaurantName = document.querySelector('#restaurant-name').value.trim();
    const orderName = document.querySelector('#order-name').value.trim();
    const yourRating = document.querySelector('#your-rating').value.trim();
    const yourExperience = document.querySelector('#your-experience').value.trim();
  
    if (restaurantName && orderName && yourRating && yourExperience) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ restaurantName, orderName, yourRating, yourExperience, user_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/archives');
      } else {
        alert('Failed to create review');
      }
    }
  };

  //document.querySelector('#submitReviewBtn').addEventListener('submit', newReviewHandler);
  var x = document.querySelector('.reviewBtn')
  //console.log(x)
  x.addEventListener('click', newReviewHandler);
  x.addEventListener('submit', newReviewHandler);