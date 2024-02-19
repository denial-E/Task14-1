document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
  
    // Fetch data function
    function fetchData(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => resolve(data))
          .catch(error => reject(error));
      });
    }
  
   
    const apiUrl = 'https://bible-api.com/john%203:16';
  
    // Fetch data and update UI
    fetchData(apiUrl)
      .then(data => {
        // Update UI with fetched data
        dataContainer.textContent = JSON.stringify(data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  });
  