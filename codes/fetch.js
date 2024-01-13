const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

fetch(wrongUrl)
  .then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })

const request = {
  get(url){
    return fetch(url);
  },
  post(url, payload){
    return fetch(url, {
      method: 'POST',
      headers: { 'content-Type' : 'application/json' },
      body: JSON.stringify(payload) 
    });
  }

}