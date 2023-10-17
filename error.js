// When dealing with asynchronous operations, like network requests, you can use try...catch or handle errors in promise .catch() blocks or async/await functions.
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network request failed');
      }
      const data = await response.json();
      // Handle the data
    } catch (error) {
      // Handle the error
    }
  }
  