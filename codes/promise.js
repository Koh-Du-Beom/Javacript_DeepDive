let g = 0;

setTimeout(()=> { g =  100; } ,0);
console.log(g);

const get = (url, successCallback, failureCallback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200){
      successCallback(JSON.parse(xhr.response));
    }else{
      failureCallback(xhr.status);
    }
  }
}

get('https://jsonplaceholder.typicode.com/posts/1', console.log, console.error);

//callback hell

const getHell = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200){
      callback(JSON.parse(xhr.response));
    }else{
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

const url = 'https://jsonplaceholder.typicode.com';
getHell(`${url}/posts/1`, ({userId}) => {
  console.log(userId);

  getHell(`${url}/users/${userId}`, userInfo => {
    console.log(userInfo);
  });
});

const fullfilled = new Promise(resolve => resolve(1));
console.log(fullfilled);

const rejected = new Promise((_, reject) => reject(new Error('error occured')));
console.log(rejected);

const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200){
        resolve(JSON.parse(xhr.response));
      }else{
        reject(new Error(xhr.status));
      }
    };
  });
};

promiseGet('https://jsonplaceholder.typicode.com/post/1')
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(()=> console.log('Bye'));

const requestData1 = () => 
  new Promise(resolve => setTimeout(()=> resolve(1), 3000));
const requestData2 = () => 
  new Promise(resolve => setTimeout(()=> resolve(2), 2000));
const requestData3 = () => 
  new Promise(resolve => setTimeout(()=> resolve(3), 1000));
  
Promise.all([requestData1(), requestData2(), requestData3()])
  .then(console.log)
  .catch(console.error);
  