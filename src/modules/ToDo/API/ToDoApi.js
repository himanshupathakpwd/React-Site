export class ToDoApiLocal {
  constructor() {
    this.localStoragePrefix = 'react_site_';
  }

  getTodos() {
    return JSON.parse(this.getItem('todos'));
  }

  setTodos(todos) {
    this.setItem('todos', JSON.stringify(todos));
  }

  getItem(key) {
    // console.log('getting item ', key);
    return localStorage.getItem(this.localStoragePrefix + key);
  }

  setItem(key, value) {
    // console.log('setting item, ', key, ' to ', value);
    localStorage.setItem(this.localStoragePrefix + key, value);
  }
}

export class ToDoApiREST {
  constructor() {
    console.log(`I'm inside constructor`);
  }

  getTodos() {
    return fetch('http://localhost:4000/api/todo/list');
  }
}
