const newReviewHandler = async (event) => {
    event.preventDefault();
  
    const restaurantName = document.querySelector('#restaurant-name').value.trim();
    const orderName = document.querySelector('#order-name').value.trim();
    const yourRating = document.querySelector('#your-rating').value.trim();
    const yourExperience = document.querySelector('#your-experience').value.trim();
  
    if (restaurantName && orderName && yourRating && yourExperience) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ restaurantName, orderName, yourRating, yourExperience }),
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

  document.querySelector('#submitReviewBtn').addEventListener('submit', newReviewHandler);