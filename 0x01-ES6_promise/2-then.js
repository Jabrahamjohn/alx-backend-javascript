export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      const obj = {
        status: 200,
        body: 'success',
      };
      return obj;
    },
    () => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
