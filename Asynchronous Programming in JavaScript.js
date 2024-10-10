//T/nbr1
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // usage:
  const values = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(values);
  
        //T/nbr2
  async function awaitCall() {
const fetchData = new Promise(resolve => { setTimeout(() => {
 resolve({ data: "API response" });}, 2000); });
 const response = await fetchData;

 console.log(response.data);
  }
 awaitCall();
        //T/nbr 5
  async function parallelCalls(urls) {
  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const responseData = await Promise.all(responses.map(response => response.json()));
    console.log(responseData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}