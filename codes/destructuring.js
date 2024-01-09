const [a ,b,c=3] = [1, 2];
console.log(a, b, c);

const [e, f = 10, g = 4] = [1, 2];
console.log(e, f, g);

function parseURL(url = ''){
  const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parsedURL);

  if (!parsedURL) return {};

  const [, protocol, host, path] = parsedURL;
  return { protocol, host, path };
}

const parsedURL = parseURL('https://developer.mozilla.org/ko/docs/Web/JavaScript');
console.log(parsedURL);

// const [x, ...y] = [1, 2, 3];
// console.log(x, y);

const user = { firstName : 'Ungmo', lastName : 'Lee'};
const { lastName: ln, firstName: fn } = user;
console.log(ln, fn);

function printTodo(todo) {
  console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'}상태입니다.`);
}

printTodo({ id : 1, content : 'HTML', completed: true});

const todos = [
  {id : 1, content : 'HTML', completed : true}, 
  {id : 2, content : 'CSS', completed : false},
  {id : 3, content : 'Javascript', completed : false},
];

const [, { id }] = todos;
console.log(id);

const { x, ...rest} = { x: 1, y: 2, z: 3};
console.log(x, rest);

