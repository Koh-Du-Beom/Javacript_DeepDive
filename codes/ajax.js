const obj = {
  name: 'lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis'],
};

const json = JSON.stringify(obj);
console.log(typeof json, json);

const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);

function filter(key, value){
  return typeof value === 'number' ? undefined : value;
}

const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);

const todos = [
  { id: 1, content: 'HTML', completed: 'false'},
  { id: 2, content: 'CSS', completed: 'true'},
  { id: 3, content: 'JAVASCRIPT', completed: 'false'},
];

const arrJson = JSON.stringify(todos, null, 2);
console.log(typeof arrJson, arrJson);

const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
  }else{
    console.error('Error', xhr.status, xhr.statusText);
  }
}