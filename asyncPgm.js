function getData() {
    fetchData()
      .then((response) => {
        console.log(response);
        return fetchFinalData(response);
      })
      .then((finalData) => {
        console.log(finalData);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
 // Do this:
  
  async function getData() {
    try {
      const response = await fetchData();
      console.log(response);
     
      const finalData = await fetchFinalData(response);
      console.log(finalData);
     
    } catch (error) {
      console.error(error);
    }
  }